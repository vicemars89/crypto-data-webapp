import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Crypto } from '../models/crypto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CryptoDataService {

  private api = 'http://localhost:8080/';  // URL to web api

  constructor(
    private http: HttpClient
    ) { }

  getAllCrypto(): Observable<Crypto[]>{
    return this.http.get<Crypto[]>(this.api+"every-crypto-eur")
  }

}
