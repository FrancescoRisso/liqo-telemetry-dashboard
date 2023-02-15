/*

description:
	Creates a map, with eventually some pins
	
state:
	
hooks:
	- useMemo: used to avoid the map re-centering at each render
	
context:
	
imported into:
	- ClusterDetails
	
component dependences:
	
other dependences:
	- react-google-maps/api components
	
*/

import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { renderMap } from "../devSettings";

export interface MapProps {
	location?: [number, number]; // The (lat, long) of the center of the map (ignored if there are pins)
	pins?: [number, number][]; // An array of (lat, long) of pins to be inserted in the map
	width: number | string; // The width of the map in the page
	height: number | string; // The height of the map in the page
}

const Map = ({ location, pins, width, height }: MapProps) => {
	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY || "" });

	const center = useMemo(() => {
		if ((pins === undefined || pins.length === 0) && location !== undefined)
			return { lat: location[0], lng: location[1] };
		if (pins !== undefined && pins.length > 0)
			return {
				lng: (Math.max(...pins.map((pin) => pin[1])) + Math.min(...pins.map((pin) => pin[1]))) / 2,
				lat: (Math.max(...pins.map((pin) => pin[0])) + Math.min(...pins.map((pin) => pin[0]))) / 2
			};
		return { lat: 0, lng: 0 };
	}, [pins, location]);

	const minMaxDelta = (pins: [number, number][], coordinate: 0 | 1) => {
		if (pins.length === 0) return 0;
		const min = Math.min(...pins.map((pin) => pin[coordinate]));
		const max = Math.max(...pins.map((pin) => pin[coordinate]));
		return max - min;
	};

	const scale = useMemo(() => {
		if (pins === undefined || pins?.length === 0) return 0;

		let scaleX: number = 0;
		let scaleY: number = 0;

		const distX = minMaxDelta(pins, 1);
		if (distX <= 10) scaleX = 4;
		else if (distX <= 30) scaleX = 3;
		else if (distX <= 60) scaleX = 2;
		else if (distX <= 160) scaleX = 1;
		else scaleX = 0;

		const distY = minMaxDelta(pins, 0);
		if (distY <= 6) scaleY = 4;
		else if (distY <= 12) scaleY = 3;
		else if (distY <= 24) scaleY = 2;
		else if (distY <= 52) scaleY = 1;
		else scaleY = 0;

		return Math.min(scaleX, scaleY);
	}, [pins]);

	if (renderMap)
		return (
			<div style={{ width, height }}>
				{isLoaded ? (
					<GoogleMap zoom={scale} center={center} mapContainerClassName="h-100percent w-100percent">
						{pins?.map((pin, id) => (
							<MarkerF key={id} position={{ lat: pin[0], lng: pin[1] }} />
						))}
					</GoogleMap>
				) : (
					<span className="spinner-border"></span>
				)}
			</div>
		);

	return (
		<div style={{ width, height }} className="center-text-horizontally center-text-vertically border">
			Here is map
		</div>
	);
};

export default Map;
