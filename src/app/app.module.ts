import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/header/header.module';
import { SidenavModule } from './core/sidenav/sidenav.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, SidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
