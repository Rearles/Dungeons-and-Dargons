import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor(private httpClient: HttpClient, private router: Router) { }

}
