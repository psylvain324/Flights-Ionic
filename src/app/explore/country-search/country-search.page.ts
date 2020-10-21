import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CountryService } from '../services/country.service';
import { Country, CountryResponse } from '../models/country-response.model';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.page.html',
  styleUrls: ['./country-search.page.scss'],
})
export class CountrySearchComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  countries: Country[] = [];

  constructor(private service: CountryService) {}

  ngOnInit() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (this.countries.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getCountries() {
    this.service.getAllCountries().subscribe((data: CountryResponse) => {
      this.countries = data.data;
    });
  }

}
