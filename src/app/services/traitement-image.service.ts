import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraitementImageService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  addNoise(file: File, noiseLevel: number): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('noiseLevel', noiseLevel.toString()); 

    // Send POST request to the backend
    return this.http.post(this.apiUrl+"/add_noise", formData, {
      responseType: 'blob',
    });
  }
}
