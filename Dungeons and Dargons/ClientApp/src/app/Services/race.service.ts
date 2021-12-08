import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  race(race: any): Observable<any> {
    return this.httpClient.get<any>(race);
  }
}
