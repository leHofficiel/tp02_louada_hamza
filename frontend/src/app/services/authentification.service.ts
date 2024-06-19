import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private jwtToken: string | null = null;

  constructor(private http:HttpClient) { }

  
  public loginClient(email: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };  
    data = 'login=' + email + '&password=' + password;
    return this.http.post<Client>(environment.backendLoginClient, data, httpOptions)
      .pipe(
        tap((response: any) => {
          if (response && response.accessToken) {
            this.jwtToken = response.accessToken;
          }
        })
      );
  }

  public registerClient(client: Client): Observable<Client> {
    return this.http.post<Client>(environment.backendRegisterClient, client);
  }

  public isConnected(): boolean {
    return this.jwtToken !== null;
  }

  public logout(): void {
    this.jwtToken = null;
  }

}
