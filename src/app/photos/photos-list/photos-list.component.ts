import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos, err => console.log(err));
  }

}
