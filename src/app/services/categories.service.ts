import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private api = environment.apiUrl + '/categorias/';

  constructor(private http: HttpClient, ) { }

  getAll() {

    return new Promise(res => {
      this.http.get(this.api).subscribe(data => {
        res(data);
      }, err => {
        console.log(err);
      });
    });

  }

  getById(id: number) {
    return new Promise(res => {
      this.http.get(this.api + id).subscribe(data => {
        res(data);
      }, err => {
        console.log(err);
      });
    });
  }

  add(category) {
    return new Promise(res => {
      this.http.post(this.api, category).subscribe(data => {
        res(data);
      }, err => {
        console.log(err);
      });
    });
  }

  update(id: number, category) {
    return new Promise(res => {
      this.http.put(this.api + id, category).subscribe(data => {
        res(data);
      }, err => {
        console.log(err);
      });
    });
  }

  delete(id: number) {
    return new Promise(res => {
      this.http.delete(this.api + id).subscribe(data => {
        res(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
