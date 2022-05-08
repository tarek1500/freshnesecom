import { ContactInfo } from './contact-info.interface';
import { Social } from './social.interface';

export interface Contact {
	latitude: number,
	longitude: number
	contactsInfo: ContactInfo[],
	socials: Social[]
}
