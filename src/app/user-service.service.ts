import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  loadRandomUser():Observable<User> {
    return this.http.get("https://randomuser.me/api/").pipe(
      map((data:any) => new User(
          data.results[0].name.first,
          data.results[0].name.last,
          data.results[0].picture.large
        ) 
      )
    )
  }
}
