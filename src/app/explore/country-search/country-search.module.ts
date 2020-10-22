import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule } from '@ionic/angular';
import { DropdownModule } from 'primeng/dropdown';
import { CountrySearchComponent } from './country-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../services/country.service';

const routes: Routes = [
  {
    path: '',
    component: CountrySearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CountrySearchComponent],
  providers: [],
  exports: [CountryService]
})
export class CountrySearchModule {}
