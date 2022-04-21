import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publisher } from '../model/publisher';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient){}
  listPublsher(): Observable<any>{
  return this.http.get(environment.baseUrl+'/publisher')
  .pipe(map(data=>data));
}
savePublisher(publisher: Publisher): Observable<any>{
  return this.http.post(environment.baseUrl+ '/simpanpublisher',publisher)
  .pipe(map(data=>data));
}

getPublisher(id: number): Observable<any>{
  return this.http.get(environment.baseUrl+ '/editpublisher/'+id)
  .pipe(map(data=>data));
}
listPublisher(): Observable<any>{
  return this.http.get(environment.baseUrl+'/autor')
  .pipe(map(data=>data));
}
}