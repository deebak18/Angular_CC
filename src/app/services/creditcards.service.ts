import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditcardsService {
  private apiUrl = 'http://localhost:3000/creditcards';

  constructor(private http: HttpClient) {}

  //CRUD operations
  createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(this.apiUrl, creditCard);
  }

  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(this.apiUrl);
  }

  getCreditCardById(id: Number): Observable<CreditCard> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CreditCard>(url);
  }

  //update functionality

  updateCreditcard(creditCard: CreditCard): Observable<CreditCard> {
    const url = `${this.apiUrl}/${creditCard.id}`;
    return this.http.put<CreditCard>(url, creditCard);
  }

  deleteCreditCard(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
