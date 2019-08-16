import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url:'https://images.uncyc.org/pt/thumb/7/7c/Homerf.png/300px-Homerf.png',
      description:'Hommer'
    },
    {
      url:'http://d26lpennugtm8s.cloudfront.net/stores/802/372/products/bart1-b5a7e6b5fa4a4e179e15266685305387-1024-1024-eeac8a8ea17967548d15441973395151-640-0.png',
      description:'Bart'
    }
  ];
}

