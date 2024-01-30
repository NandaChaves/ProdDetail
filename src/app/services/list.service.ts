import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chocolat } from '../Chocolat';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = "http://localhost:3000/chocs";

  constructor(private http:HttpClient) {}

   getAll(): Observable<Chocolat[]>{
    return this.http.get<Chocolat[]>(this.apiUrl);
  }
  
  getItem(id: number): Observable<Chocolat>{
    return this.http.get<Chocolat>(`${this.apiUrl}/${id}`);
  }
}
