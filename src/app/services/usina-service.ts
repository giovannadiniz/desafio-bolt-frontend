import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsinaDto} from '../models/usina-dto';

@Injectable({
  providedIn: 'root'
})
export class UsinaService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.BACKEND_URL;
  private contextUrl: string = environment.CONTEXT_URL;

  getTop5MaioresUsinas(): Observable<UsinaDto[]> {

    return this.http.get<UsinaDto[]>(`${this.baseUrl}${this.contextUrl}/maiores`);
  }
}
