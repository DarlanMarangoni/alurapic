import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosFormComponent } from './photos-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessages/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PhotosFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule
    ]
})
export class PhotosFormModule{

}