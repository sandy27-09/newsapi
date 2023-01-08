import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY="89d157b7298f4318aaa4174fea221a15";

  constructor(private httpClient: HttpClient) { }

  public getNews()
  {
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=89d157b7298f4318aaa4174fea221a15');
  }
}
