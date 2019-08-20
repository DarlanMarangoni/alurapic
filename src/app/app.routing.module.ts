import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotolistResolver } from './photos/photos-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard],
        children:
        [
            {
                path: '', 
                component: SignInComponent
            },
            {
                path: 'signup', 
                component: SignUpComponent
            },
        ]
    },
    
    {
        path: 'user/:userName', 
        component: PhotosListComponent,
        resolve: {
            photos: PhotolistResolver
    }
    },
    {
        path: 'p/add', component: PhotosFormComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}