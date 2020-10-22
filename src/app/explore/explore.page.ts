import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  providers: [CountryService]
})
export class ExplorePage implements OnInit {

  constructor() { }

  ngOnInit() {}

}
