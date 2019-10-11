import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsermenuService {
id=sessionStorage.getItem('id');
  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Training[]>(this.userUrl+"/"+
      this.id+"/Completed");
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Training>(this.userUrl, user);
  }

}
