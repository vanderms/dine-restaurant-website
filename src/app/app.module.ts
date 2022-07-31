import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { HeaderSectionComponent } from './components/sections/header-section/header-section.component';
import { ButtonWrapperComponent } from './components/buttons/button-wrapper/button-wrapper.component';
import { FeaturesSectionComponent } from './components/sections/features-section/features-section.component';
import { FeatureCardComponent } from './components/cards/feature-card/feature-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BookingPageComponent,
    HeaderSectionComponent,
    ButtonWrapperComponent,
    FeaturesSectionComponent,
    FeatureCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
