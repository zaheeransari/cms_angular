import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class RestService {
  constructor(private http: HttpClient) { }

  fetchdata(url): Observable<any> {  
    return this.http.get(url);
  }
  fetch(url): Observable<any> {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.authToken
    //   })
    // };
    //return this.http.get(environment.apiPath + url,httpOptions);
    return this.http.get(environment.apiPath + url);
  }

  post(url, data): Observable<any> {
    return this.http.post(environment.apiPath + url, data)
  }
  put(url, data): Observable<any> {
    return this.http.put(environment.apiPath + url, data)
  }
}
