import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:3000/contact"
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url)
  }
  save(data) {
    console.warn(data)
    return this.http.post(this.url, data)
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getcontact(id) {
    return this.http.get(`${this.url}/${id}`)
  }
  update(id, data) {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
