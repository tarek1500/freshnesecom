import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { TextInputGroupModule } from './modules/text-input-group/text-input-group.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
	declarations: [
		AppComponent,
		LoaderComponent,
		ChatComponent,
		MessageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgScrollbarModule,
		NgbModule,
		TextInputGroupModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
