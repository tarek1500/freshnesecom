import { ContactInfo } from './contact-info.interface';
import { Social } from './social.interface';

export interface Contact {
	center: google.maps.LatLngLiteral,
	contactsInfo: ContactInfo[],
	socials: Social[]
}
