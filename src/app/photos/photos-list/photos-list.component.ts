import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from  'rxjs/operators'

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor( private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];      
    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void{
      this.debounce.unsubscribe();
  }

}
