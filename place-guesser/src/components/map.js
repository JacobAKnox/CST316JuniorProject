"use client"

import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function MapView() {
    return (
        <div className="w-1/2 h-96 content-center">
            <MapContainer className="h-full w-full content-center" center={[51.505, -0.09]} zoom={13} 
            scrollWheelZoom={false} dragging={false} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}