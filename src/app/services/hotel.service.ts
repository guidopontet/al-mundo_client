import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from "../services/global";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {

  public url: String;


  constructor(
    private _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  // Devuelve Hoteles, por defecto los parametros de filtrado son nulos
  getHotels(filter_string="",filter_stars=""):Observable<any>{
    let params = {filter_string,filter_stars}
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.post(this.url + 'hotels', params ,{ headers })
  }

}
