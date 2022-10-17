import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Message } from '../../interfaces/message.interface';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
	moment: any = moment;
	@Input() message!: Message;
	@Input('right-position') rightPosition: boolean = false;

	constructor() { }

	ngOnInit(): void { }
}
