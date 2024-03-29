import { AfterViewChecked, Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { LanguageService } from '../../services/language/language.service';

@Component({
	selector: 'app-text-input-group',
	templateUrl: './text-input-group.component.html',
	styleUrls: ['./text-input-group.component.scss']
})
export class TextInputGroupComponent implements OnInit, AfterViewChecked, OnDestroy {
	@Input() placeholder!: string;
	@Input() button!: string;
	@Output() onApply: EventEmitter<string> = new EventEmitter<string>();
	@ViewChild('input') input!: ElementRef<HTMLInputElement>;
	subscriptions: Subscription[] = [];
	rtl: boolean = false;

	constructor(private languageService: LanguageService) { }

	ngOnInit(): void {
		let subscription = this.languageService.languageSubject$.subscribe(language => {
			this.rtl = language.rtl;
		});
		this.subscriptions.push(subscription);
	}

	ngAfterViewChecked() {
		this.setInputGroupWidth(this.input);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		this.setInputGroupWidth(this.input);
	}

	setInputGroupWidth(input: ElementRef<HTMLInputElement>, sizeFixer: number = 0) {
		let inputGroupPrepend = input.nativeElement.parentElement as HTMLDivElement;

		let inputGroup = inputGroupPrepend.parentElement as HTMLDivElement;
		let inputGroupWidth = inputGroup.offsetWidth;

		let button = inputGroupPrepend.nextElementSibling as HTMLButtonElement;
		let buttonWidth = button.offsetWidth;

		inputGroupPrepend.style.width = (inputGroupWidth - buttonWidth - sizeFixer) + 'px';
	}

	onInputKeyPressed(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();

			this.onApply.emit(this.input.nativeElement.value);
		}
	}

	onButtonClicked(event: MouseEvent) {
		this.onApply.emit(this.input.nativeElement.value);
	}
}
