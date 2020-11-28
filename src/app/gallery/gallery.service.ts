import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gallery, MovieBasics } from './models';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getMediaList(): Observable<Gallery> {
    const url = environment['mediaList'] || 'https://gtrtoph0d7.execute-api.us-east-1.amazonaws.com/dev/media';

    return this.http.get<MovieBasics[]>(url).pipe(
      map(resp => new Gallery(resp))
    );
  };
}
