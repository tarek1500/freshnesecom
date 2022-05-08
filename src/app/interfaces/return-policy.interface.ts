import { ReturnPolicyContent } from './return-policy-content.interface';

export interface ReturnPolicy {
	date: Date,
	tableOfContents: ReturnPolicyContent[]
}
