import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../interfaces/breadcrumb.interface';
import { PrivacyPolicy } from '../../interfaces/privacy-policy.interface';

@Component({
	selector: 'app-privacy-policy',
	templateUrl: './privacy-policy.component.html',
	styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
	breadcrumb: Breadcrumb[] = [
		{ text: 'Homepage', link: '/' },
		{ text: 'Privacy Policy', link: '' }
	];
	privacyPolicy!: PrivacyPolicy;

	constructor() { }

	ngOnInit(): void {
		this.privacyPolicy = {
			date: new Date('2022-5-8'),
			intro: '<p>This privacy notice for Freshnesecom ("<span class="bold">Company</span>," "<span class="bold">we</span>," "<span class="bold">us</span>," or "<span class="bold">our</span>"), describes how and why we might collect, store, use, and/or share ("<span class="bold">process</span>") your information when you use our services ("<span class="bold">Services</span>"), such as when you:</p><ul><li>Visit our website at <a href="https://freshnesecom-template.herokuapp.com/">https://freshnesecom-template.herokuapp.com/</a>, or any website of ours that links to this privacy notice</li><li>Engage with us in other related ways, including any sales, marketing, or events</li></ul><p><span class="bold">Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@freshnesecom.com.</p>',
			summary: {
				name: 'Summary of key points',
				link: '',
				content: '<p><span class="bold italic">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</span></p><p><span class="bold">What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Freshnesecom and the Services, the choices you make, and the products and features you use.</p><p><span class="bold">Do we process any sensitive personal information?</span> We do not process sensitive personal information.</p><p><span class="bold">Do you receive any information from third parties?</span> We do not receive any information from third parties.</p><p><span class="bold">How do you process my information?</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p><p><span class="bold">In what situations and with which parties do we share personal information?</span> We may share information in specific situations and with specific third parties.</p><p><span class="bold">How do we keep your information safe?</span> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p><p><span class="bold">What are your rights?</span> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p><p><span class="bold">How do I exercise my rights?</span> The easiest way to exercise your rights is by filling out our data subject request form available, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>'
			},
			tableOfContents: [
				{
					name: 'What information do we collect?',
					link: 'what-information-do-we-collect',
					content: '<h4>Personal information you disclose to us</h4><p><span class="italic"><span class="bold">In Short:</span> We collect personal information that you provide to us.</span></p><p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p><p><span class="bold">Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p><ul><li>names</li><li>phone numbers</li><li>email addresses</li><li>passwords</li><li>billing addresses</li><li>debit/credit card numbers</li></ul><p><span class="bold">Sensitive Information.</span> We do not process sensitive information.</p><p><span class="bold">Payment Data.</span> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by PayPal and Stripe. You may find their privacy notice link(s) here: <a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full">https://www.paypal.com/us/webapps/mpp/ua/privacy-full</a> and <a href="https://stripe.com/privacy">https://stripe.com/privacy</a></p><p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>'
				},
				{
					name: 'How do we process your information?',
					link: 'how-do-we-process-your-information',
					content: '<p><span class="italic"><span class="bold">In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</span></p><p><span class="bold">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</span></p><ul><li><span class="bold">To facilitate account creation and authentication and otherwise manage user accounts.</span> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li><li><span class="bold">To deliver and facilitate delivery of services to the user.</span> We may process your information to provide you with the requested service.</li><li><span class="bold">To fulfill and manage your orders.</span>We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li><li><span class="bold">To save or protect an individual\'s vital interest.</span> We may process your information when necessary to save or protect an individual???s vital interest, such as to prevent harm.</li></ul>'
				},
				{
					name: 'What legal bases do we rely on to process your personal information?',
					link: 'what-legal-bases-do-we-rely-on-to-process-your-personal-information',
					content: '<p><span class="italic"><span class="bold">In Short:</span> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</span></p><p><span class="bold italic underline">If you are located in the EU or UK, this section applies to you.</span></p><p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p><ul><li><span class="bold">Consent.</span> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li><li><span class="bold">Performance of a Contract.</span> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li><li><span class="bold">Legal Obligations.</span> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li><li><span class="bold">Vital Interests.</span> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li></ul><p><span class="bold italic underline">If you are located in Canada, this section applies to you.</span></p><p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p><p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p><ul><li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li><li>For investigations and fraud detection and prevention</li><li>For business transactions provided certain conditions are met</li><li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li><li>For identifying injured, ill, or deceased persons and communicating with next of kin</li><li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li><li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li><li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li><li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li><li>If the collection is solely for journalistic, artistic, or literary purposes</li><li>If the information is publicly available and is specified by the regulations</li></ul>'
				},
				{
					name: 'When and with whom do we share your personal information?',
					link: 'when-and-with-whom-do-we-share-your-personal-information',
					content: '<p><span class="italic"><span class="bold">In Short</span> We may share information in specific situations described in this section and/or with the following third parties.</span></p><p>We may need to share your personal information in the following situations:</p><ul><li><span class="bold">Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li><li><span class="bold">When we use Google Maps Platform APIs.</span> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). To find out more about Google???s Privacy Policy, please refer to this <a href="https://policies.google.com/privacy">link</a>.</li><li><span class="bold">Business Partners.</span> We may share your information with our business partners to offer you certain products, services, or promotions.</li></ul>'
				},
				{
					name: 'Do we use cookies and other tracking technologies?',
					link: 'do-we-use-cookies-and-other-tracking-technologies',
					content: '<p><span class="italic"><span class="bold">In Short:</span> We may use cookies and other tracking technologies to collect and store your information.</span></p><p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>'
				},
				{
					name: 'How long do we keep your information?',
					link: 'how-long-do-we-keep-your-information',
					content: '<p><span class="italic"><span class="bold">In Short:</span> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</span></p><p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p><p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>'
				},
				{
					name: 'How do we keep your information safe?',
					link: 'how-do-we-keep-your-information-safe',
					content: '<p><span class="italic"><span class="bold">In Short:</span> We aim to protect your personal information through a system of organizational and technical security measures.</span></p><p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>'
				},
				{
					name: 'What are your privacy rights?',
					link: 'what-are-your-privacy-rights',
					content: '<p><span class="italic"><span class="bold">In Short:</span> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</span></p><p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details.</p><p>We will consider and act upon any request in accordance with applicable data protection laws.</p><p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a></p><p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a></p><p><span class="bold underline">Withdrawing your consent:</span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details.</p><p>However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p><p><span class="bold underline">Opting out of marketing and promotional communications:</span> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details. You will then be removed from the marketing lists. However, we may still communicate with you ??? for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p><h4>Account Information</h4><p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p><ul><li>Log in to your account settings and update your user account.</li></ul><p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p><p><span class="bold underline">Cookies and similar technologies:</span> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.</p><p>If you have questions or comments about your privacy rights, you may email us at info@freshnesecom.com.</p>'
				},
				{
					name: 'Controls for do-not-track features',
					link: 'controls-for-do-not-track-features',
					content: '<p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>'
				},
				{
					name: 'Do california residents have specific privacy rights?',
					link: 'do-california-residents-have-specific-privacy-rights',
					content: '<p><span class="italic"><span class="bold">In Short:</span> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</span></p><p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p><p>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</p><h4>CCPA Privacy Notice</h4><p>The California Code of Regulations defines a "resident" as:</p><ul class="remove-dots"><li>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</li><li>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li></ul><p>All other individuals are defined as "non-residents".</p><p>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</p><p><span class="bold">What categories of personal information do we collect?</span></p><p>We have collected the following categories of personal information in the past twelve (12) months:</p><div class="table-responsive"><table class="table"><thead><tr><th>Category</th><th>Examples</th><th>Collected</th></tr></thead><tbody><tr><td>A. Identifiers</td><td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td><td>NO</td></tr><tr><td>B. Personal information categories listed in the California Customer Records statute</td><td>Name, contact information, education, employment, employment history, and financial information</td><td>YES</td></tr><tr><td>C. Protected classification characteristics under California or federal law</td><td>Gender and date of birth</td><td>NO</td></tr><tr><td>D. Commercial information</td><td>Transaction information, purchase history, financial details, and payment information</td><td>NO</td></tr><tr><td>E. Biometric information</td><td>Fingerprints and voiceprints</td><td>NO</td></tr><tr><td>F. Internet or other similar network activity</td><td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td><td>NO</td></tr><tr><td>G. Geolocation data</td><td>Device location</td><td>NO</td></tr><tr><td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td><td>Images and audio, video or call recordings created in connection with our business activities</td><td>NO</td></tr><tr><td>I. Professional or employment-related information</td><td>Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td><td>NO</td></tr><tr><td>J. Education Information</td><td>Student records and directory information</td><td>NO</td></tr><tr><td>K. Inferences drawn from other personal information</td><td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual???s preferences and characteristics</td><td>NO</td></tr></tbody></table></div><p>We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:</p><ul><li>Receiving help through our customer support channels;</li><li>Participation in customer surveys or contests; and</li><li>Facilitation in the delivery of our Services and to respond to your inquiries.</li></ul><p><span class="bold">How do we use and share your personal information?</span></p><p>More information about our data collection and sharing practices can be found in this privacy notice.</p><p>You may contact us by email at info@freshnesecom.com, by calling toll-free at +420 336 775 664, by visiting <a href="https://freshnesecom-template.herokuapp.com/contact">https://freshnesecom-template.herokuapp.com/contact</a>, or by referring to the contact details at the bottom of this document.</p><p>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p><p><span class="bold">Will your information be shared with anyone else?</span></p><p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p><p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p><p>Freshnesecom has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Freshnesecom will not sell personal information in the future belonging to website visitors, users, and other consumers.</p><p><span class="bold">Your rights with respect to your personal data</span></p><p><span class="underline">Right to request deletion of the data ??? Request to delete</span></p><p>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</p><p><span class="underline">Right to be informed ??? Request to know</span></p><p>Depending on the circumstances, you have a right to know:</p><ul><li>whether we collect and use your personal information;</li><li>the categories of personal information that we collect;</li><li>the purposes for which the collected personal information is used;</li><li>whether we sell your personal information to third parties;</li><li>the categories of personal information that we sold or disclosed for a business purpose;</li><li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li><li>the business or commercial purpose for collecting or selling personal information.</li></ul><p>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p><p><span class="underline">Right to Non-Discrimination for the Exercise of a Consumer???s Privacy Rights</span></p><p>We will not discriminate against you if you exercise your privacy rights.</p><p><span class="underline">Verification process</span></p><p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p><p>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p><p><span class="underline">Other privacy rights</span></p><ul><li>You may object to the processing of your personal information.</li><li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</li><li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li><li>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</li></ul><p>To exercise these rights, you can contact us by email at info@freshnesecom.com, by calling toll-free at +420 336 775 664, by visiting <a href="https://freshnesecom-template.herokuapp.com/contact">https://freshnesecom-template.herokuapp.com/contact</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>'
				},
				{
					name: 'Do we make updates to this notice?',
					link: 'do-we-make-updates-to-this-notice',
					content: '<p><span class="italic"><span class="bold">In Short</span> Yes, we will update this notice as necessary to stay compliant with relevant laws.</span></p><p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>'
				},
				{
					name: 'How can you contact us about this notice?',
					link: 'how-can-you-contact-us-about-this-notice',
					content: '<p>If you have questions or comments about this notice, you may email us at info@freshnesecom.com or by post to:</p><div><div>Freshnesecom</div><div>1234 Freshnesecom St</div><div>San Francisco, CA 12345</div><div>Egypt</div></div>'
				},
				{
					name: 'How can you review, update, or delete the data we collect from you?',
					link: 'how-can-you-review-update-or-delete-the-data-we-collect-from-you',
					content: '<p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="https://freshnesecom-template.herokuapp.com/contact">here</a>.</p>'
				}
			]
		};
	}

	scrollToContent(event: MouseEvent, contents: HTMLDivElement) {
		event.preventDefault();

		let target = event.target as HTMLAnchorElement;
		let privacyIndex = target.href.indexOf('privacy-policy');
		let targetId = target.href.substring(privacyIndex + 15);

		contents.querySelector('#' + targetId)?.scrollIntoView();
	}

}
