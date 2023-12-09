"use client"

import { subscribe } from "@/lib/events";
import { latLng, latLngBounds, marker } from "leaflet";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

export default function MapView() {
    return (
        <div className="w-1/2 h-96 content-center">
            <MapContainer className="h-full w-full content-center" center={[51.505, -0.09]} zoom={13} 
            scrollWheelZoom={false} dragging={false} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController event="guess_made"/>
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
            // not really work fixing
            const c1 = latLng(res.bounds.northeast.lat, res.bounds.northeast.lng)
            const c2 = latLng(res.bounds.southwest.lat, res.bounds.southwest.lng)
            const b = latLngBounds(c1, c2)
            map.fitBounds(b)
        })
        const ll = latLng(location.latitude, location.longitude)
        let p = marker(ll)
        p.addTo(map)
    }

    subscribe(event, move_focus)

    return null;
}