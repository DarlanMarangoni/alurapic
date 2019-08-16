import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component'

const routes: Routes = [
    {path: 'user/flavio', component: PhotosListComponent},
    {path: 'p/add', component: PhotosFormComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}