import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https:m1mean.onrender.com/users/authenticate'; // Remplacez cette URL par l'URL de votre API


  postData(data: any): Promise<any> {
    return fetch(`${this.apiUrl  }`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }


}
