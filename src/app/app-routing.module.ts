import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/Explore',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'explore',
    children: [
      {
        path: '',
        loadChildren: './explore/explore.module#ExploreModule'
      },
      {
        path: ':countryName',
        loadChildren:
          './explore/country-search/country-search.module#CountrySearchModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
