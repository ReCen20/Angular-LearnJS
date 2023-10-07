import { Component } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Angular-LearnJS-1';
	readonly log = console.log;

	readonly applicationConfig = applicationConfigMock;

	onClick($event: MouseEvent) {
		console.log('header click', $event);
	}
}
