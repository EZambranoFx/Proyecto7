import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {
  private URL: string = 'https://restapip7-production.up.railway.app/rest/producto/findAll/json';
  constructor(private http:HttpClient) { }
  getResponse() {
    return this.http.get(this.URL);
}
}
