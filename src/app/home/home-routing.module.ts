import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'explore',
    children: [
      {
        path: '',
        loadChildren: './explore/explore.module#ExploreModule'
      },
      {
        path: ':countryCode',
        loadChildren:
          './explore/country-search/country-search.module#CountrySearchModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
