import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Chocolat } from '../Chocolat';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class ListService {
private apiUrl = "https://chocolat-api.onrender.com/chocs";

constructor(private http: HttpClient) {}

getAll(): Observable<Chocolat[]> {
return this.http.get<Chocolat[]>(this.apiUrl).pipe(
retry(3), // tenta novamente 3x se o Render estiver acordando
catchError(err => {
console.error('Erro ao carregar chocolates:', err);
return of([]); // evita quebrar a página
})
);
}

getItem(id: number): Observable<Chocolat> {
return this.http.get<Chocolat>(`${this.apiUrl}/${id}`).pipe(
retry(3),
catchError(err => {
console.error(`Erro ao carregar item ${id}:`, err);
return of({} as Chocolat);
})
);
}
}
