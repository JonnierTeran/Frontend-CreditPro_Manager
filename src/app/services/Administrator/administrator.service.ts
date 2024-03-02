import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministratorModels } from '../../models/administrator-models';
import { ResponseModels } from '../../models/response-models';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  private apiUrl: string;

  constructor(private _httpClient: HttpClient) {

    this.apiUrl = "http://localhost:8080/App/Administrator"
  }

  public saveAdmin(Admin: AdministratorModels): Observable<ResponseModels> {
    return this._httpClient.post<ResponseModels>("http://localhost:8080/App/Administrator/saveAdmin", Admin);
  }
}
