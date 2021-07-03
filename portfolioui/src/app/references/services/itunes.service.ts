import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItunesData } from '../models/itunes-data.model';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private http: HttpClient) { }

  getItunesData() {
    const url = 'https://itunes.apple.com/us/rss/topalbums/limit=20/json';
    return this.http.get<{feed: ItunesData}>(url);
  }
}
