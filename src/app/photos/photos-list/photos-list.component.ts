import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor( private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];      
  }

}
