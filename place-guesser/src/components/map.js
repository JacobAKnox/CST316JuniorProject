"use client"

import { subscribe } from "@/lib/events";
import { latLng, marker } from "leaflet";
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
    const [pin, setPin] = useState(null)

    const move_focus = (location) => {
        const ll = latLng(location.latitude, location.longitude)
        map.setView(ll, 3)
        let p = marker(ll)
        if (pin !== null) {
            map.removeControl(pin)
        }
        setPin(p)
        p.addTo(map)
    }

    subscribe(event, move_focus)

    return null;
}