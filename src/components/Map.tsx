"use client"
import L from "leaflet";
import { RecentFieldPoints } from '@/types/dashboard'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// Fix for default Leaflet icon paths in Next.js
if (typeof window !== "undefined") {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
    });
}

const Map = ({ fieldPoints }: { fieldPoints: RecentFieldPoints[] }) => {
    // Default center if no points (e.g., Cairo)
    const defaultCenter: [number, number] = [29.8206, 30.8025];
    const center = fieldPoints && fieldPoints.length > 0
        ? [fieldPoints[0].lat, fieldPoints[0].lng] as [number, number]
        : defaultCenter;

    console.log("Rendering map with points:", fieldPoints);
    return (
        <MapContainer
            center={center}
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                fieldPoints?.map((point: any) => (
                    <Marker key={point.id} position={[point.lat, point.lng]}>
                        <Popup>
                            {point.sample_type}
                            {
                                console.log(point.lat, point.lng)
                            }
                        </Popup>
                    </Marker>

                ))
            }
        </MapContainer >
    )
}

export default Map