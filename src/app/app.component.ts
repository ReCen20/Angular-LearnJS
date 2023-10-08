import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
	title = 'Angular-LearnJS-1';
	readonly log = console.log;

	isSidenavOpened = true;

	readonly applicationConfig = applicationConfigMock;

	toggleSidenavOpened() {
		this.isSidenavOpened = !this.isSidenavOpened;
	}

	onClick($event: MouseEvent) {
		console.log('header click', $event);
	}
}
