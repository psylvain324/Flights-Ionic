
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  flagsUrl = environment.flagsBaseUrl;
  countriesUrl = environment.countriesUrl;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    const apiUrl = this.countriesUrl;
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(() => {
        return throwError('There was a problem with the request');
      })
    );
  }

  getFlagUrlByCountry(countryCode: string): string {
    return this.flagsUrl + countryCode + '/flat/64.png';
  }

}
