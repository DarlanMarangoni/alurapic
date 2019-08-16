import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos, err => console.log(err));
  }

}
