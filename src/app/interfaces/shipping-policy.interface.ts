import { ShippingPolicyContent } from './shipping-policy-content.interface';

export interface ShippingPolicy {
	date: Date,
	tableOfContents: ShippingPolicyContent[]
}
