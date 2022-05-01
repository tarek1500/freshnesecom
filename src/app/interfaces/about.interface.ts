import { ContactInfo } from './contact-info.interface';
import { Service } from './service.interface';
import { Statistics } from './statistics.interface';

export interface About {
	title: string,
	subtitle: string,
	year: string,
	intro: string,
	images: string[],
	services: Service[]
	statistics: Statistics,
	contactsInfo: ContactInfo[]
}
