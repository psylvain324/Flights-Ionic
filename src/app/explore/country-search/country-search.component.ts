import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CountryService } from '../services/country.service';
import { Country, CountryResponse } from '../models/country-response.model';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  selectedCountry: Country;
  countries: Country[] = [];

  constructor(private service: CountryService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.service.getAllCountries().subscribe((data: CountryResponse) => {
      this.countries = data.data;
    });
  }

}
