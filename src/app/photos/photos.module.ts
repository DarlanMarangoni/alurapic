import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotosFormModule } from './photos-form/photos-form.module';
import { PhotoListModule } from './photos-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { DarkOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
   
    imports: [
        PhotoModule,
        PhotosFormModule,
        PhotoListModule,
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule{

}