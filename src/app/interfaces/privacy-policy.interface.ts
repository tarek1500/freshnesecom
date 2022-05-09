import { PrivacyPolicyContent } from './privacy-policy-content.interface';

export interface PrivacyPolicy {
	date: Date,
	intro: string,
	summary: PrivacyPolicyContent;
	tableOfContents: PrivacyPolicyContent[]
}
