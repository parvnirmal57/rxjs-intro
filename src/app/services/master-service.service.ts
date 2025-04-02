import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  // public onRoleChange$ : Subject<string> = new Subject<string>;

    public onRoleChange$ : BehaviorSubject<string> = new BehaviorSubject<string>("Role");

    private apiUrl = 'https://localhost:7140/api/Users/GetAllUsers';


  constructor(private http: HttpClient) { }

  search(query: string): Observable<any[]> {
   const SearchUrl = `https://localhost:7218/api/Search/search`
    return this.http.get<any[]>(`${SearchUrl}?q=${query}`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        is_admin: user.is_admin
      })))
    );
  }

  getAdmins(): Observable<any[]> {
    return this.getUsers().pipe(
      map(users => users.filter(user => user.is_admin))
    );
  }

  getRegularUsers(): Observable<any[]> {
    return this.getUsers().pipe(
      map(users => users.filter(user => !user.is_admin))
    );
  }

  getPost(): Observable<any> {
    const PostUrl = `https://jsonplaceholder.typicode.com/posts/1`
    return this.http.get(PostUrl).pipe(retry(3))
  }

}
