import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class ApiService {
  apiURL: string = 'https://swiftmtransferapi.azurewebsites.net/api';
  
  constructor(private httpClient: HttpClient) { }

  public createUser(user: User){
    return this.httpClient.post(`${this.apiURL}/User/`,user);
  }  

public getSelfUser(){
  return this.httpClient.get(`${this.apiURL}/User/GetSelf`);
}

public getAllUsers (){
  return this.httpClient.get(`${this.apiURL}/User/GetAllUsers`);
}
}
