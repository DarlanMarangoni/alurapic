import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotolistResolver } from './photos/photos-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-detail/photo-details.component';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: 'home'
    },    
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'        
    },    
    {
        path: 'user/:userName', 
        component: PhotosListComponent,
        resolve: {
            photos: PhotolistResolver
    }
    },
    {
        path: 'p/add', 
        component: PhotosFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'p/:photoId', 
        component: PhotoDetailsComponent
    },
    {
        path: 'not-found', 
        component: NotFoundComponent
    },
    {
        path: '**', 
        redirectTo: 'not-found'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}