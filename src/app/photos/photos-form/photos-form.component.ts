import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit {

  formGroup: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder, 
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload(){
    const description = this.formGroup.get('description').value;
    const allowComments = this.formGroup.get('allowComments').value;  
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']));
  }

  handleFile(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) =>this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
