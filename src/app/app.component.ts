import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  photos: Object[] = [];

  //criando  um cliente http
  constructor(http: HttpClient){
    //um observable não faz nada só olha é lazy load
    const observale = http.get<Object[]>('http://localhost:3000/flavio/photos');
    //agora ele pega os dados 
    observale.subscribe(photos => this.photos = photos, err => console.log(err));
  }\
}

