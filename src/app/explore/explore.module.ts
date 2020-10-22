import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ExplorePage } from './explore.page';
import { CountrySearchComponent } from './country-search/country-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CountrySearchModule } from './country-search/country-search.module';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplorePage, CountrySearchComponent],
  providers: [],
  exports: []
})
export class ExploreModule {}
