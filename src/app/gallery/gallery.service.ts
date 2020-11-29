import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MovieBasics } from './models';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getMediaList(): Observable<MovieBasics[]> {
    const url = environment['mediaList'] || 'https://gtrtoph0d7.execute-api.us-east-1.amazonaws.com/dev/media';

    return this.http.get<MovieBasics[]>(url);
  };

  getDetails(id: string) {
    const url = environment['mediaDetail'] || `https://gtrtoph0d7.execute-api.us-east-1.amazonaws.com/dev/media/${id}`

    return this.http.get(url);
  }
}
