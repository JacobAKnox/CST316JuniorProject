"use client"

import { puzzle } from "@/game/game";
import { subscribe } from "@/lib/events";
import { convert_bounds } from "@/lib/geoconversions";
import { latLng, marker } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function MapView({event}) {
    return (
        <div className="w-1/2 h-96 content-center p-3">
            <MapContainer className="h-full w-full content-center" center={[0, 0]} zoom={1} 
            scrollWheelZoom={false} dragging={false} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController event={event}/>
            </MapContainer>
        </div>
    );
}

function MapController({event}) {
    const map = useMap()

    const move_focus = (location) => {
        fetch(`/api/countries/bounds?name=${location.name}`)
        .then(response => response.json())
        .then((res) => {
            // therers weird bounds returned by countries that have far off islands and stuff
            // not really worth fixing
            const b = convert_bounds(res.bounds)
            map.fitBounds(b)
        })
        const ll = latLng(location.latitude, location.longitude)
        let p = marker(ll)
        p.addTo(map)
    }

    const move_goal = (goal) => {
        map.fitBounds(goal.bounds)
        marker(goal.latlong).addTo(map)
    }

    const init_pin = () => {
        marker(puzzle.latlong).addTo(map)
    }

    const init_bounds = () => {
        map.fitBounds(puzzle.bounds)
    }

    subscribe("guess_made" + event, move_focus)
    subscribe("init_pin", init_pin)
    subscribe("init_bounds", init_bounds)
    subscribe("map_update" + event, move_goal)

    if (event == "_disable") {
        setTimeout(() => {
            init_bounds()
            init_pin()
        }, 200)
    }

    return null;
}