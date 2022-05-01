import { ContactInfo } from './contact-info.interface';
import { Social } from './social.interface';

export interface Contact {
	contactsInfo: ContactInfo[],
	socials: Social[]
}
