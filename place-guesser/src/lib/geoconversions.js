import { latLng, latLngBounds } from "leaflet";

export function convert_bounds(b) {
    const c1 = latLng(b.northeast.lat, b.northeast.lng)
    const c2 = latLng(b.southwest.lat, b.southwest.lng)
    return latLngBounds(c1, c2)
}

export function convert_latlng(l) {
   return latLng(l.lat, l.lng)
}