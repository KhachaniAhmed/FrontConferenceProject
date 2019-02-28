import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  uri: string = 'http://localhost:8080/articles';
  files: Array<any>;

  constructor(private http: HttpClient, private accountservice: AccountService) { }

  getAll(): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
<<<<<<< HEAD
    return this.http.get(`${this.uri}`,{headers});
=======
    return this.http.get(`${this.uri}articles`, { headers });
>>>>>>> 022dd52c78b2ecd2fb8d434f59286c41b4a8d4e1
  }

  getOne(id): any {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
<<<<<<< HEAD
    return this.http.get(`${this.uri}/${id}`,{headers});
=======
    return this.http.get(`${this.uri}${id}`, { headers });
>>>>>>> 022dd52c78b2ecd2fb8d434f59286c41b4a8d4e1
  }

  create(article) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.post(`${this.uri}`, article, { headers });
  }

  edit(article) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
    return this.http.put(`${this.uri}`, article, { headers });
  }

  remove(id) {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
<<<<<<< HEAD
    return this.http.delete(`${this.uri}/${id}`,{headers});
=======
    return this.http.delete(`${this.uri}${id}`, { headers });
>>>>>>> 022dd52c78b2ecd2fb8d434f59286c41b4a8d4e1
  }

  public getFiles(id): Observable<any> {
    const headers = new HttpHeaders().set("authorization", this.accountservice.getToken());
<<<<<<< HEAD
    return this.http.get(`${this.uri}/${id}` + '/files',{headers});
=======
    return this.http.get(`${this.uri}${id}` + '/files', { headers });
>>>>>>> 022dd52c78b2ecd2fb8d434f59286c41b4a8d4e1
  }

  public saveUploadedFile(file) {
    this.files.push(file);
  }
}
