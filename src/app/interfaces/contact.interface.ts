import { ContactInfo } from './contact-info.interface';
import { Social } from './social.interface';

export interface Contact {
	mapKey: string,
	mapLocation: string,
	contactsInfo: ContactInfo[],
	socials: Social[]
}
