import { TermsAndConditionsContent } from './terms-and-conditions-content.interface';

export interface TermsAndConditions {
	date: Date,
	tableOfContents: TermsAndConditionsContent[]
}
