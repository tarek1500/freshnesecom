import { Country } from './country.interface';

export interface Address {
	id: number,
	title: string,
	address: string,
	city: string,
	country: Country,
	postal: string,
	position: google.maps.LatLngLiteral
}
