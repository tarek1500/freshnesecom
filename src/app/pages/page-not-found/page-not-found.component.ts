import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, AfterViewInit {
	@ViewChild('content') content!: ElementRef<HTMLDivElement>;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.setContentHeight(this.content);
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		this.setContentHeight(this.content);
	}

	setContentHeight(content: ElementRef<HTMLDivElement>) {
		let header = document.querySelector('app-header') as Element;
		let contentElement = this.content.nativeElement as HTMLDivElement;

		contentElement.style.height = (window.innerHeight - header.getBoundingClientRect().height) + 'px';
	}

}
