import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosFormComponent } from './photos-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessages/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotosFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule
    ]
})
export class PhotosFormModule{

}