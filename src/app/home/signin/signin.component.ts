import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform/platform-detector.service';


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput', null) userNameInput: ElementRef<HTMLInputElement>;
    
    constructor(private formBuilder: FormBuilder, 
                private authService: AuthService,
                private router: Router,
                private platformDetectionService: PlatformDetectorService,
                private activatedRoute: ActivatedRoute){
        
    }

    ngOnInit(): void {
        //acessando o parametro passado no url
        this.activatedRoute.queryParams.subscribe(params => {
            this.fromUrl = params['fromUrl'];
        })

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectionService.isPlatformBrowser() && 
                        this.userNameInput.nativeElement.focus();
    }
    
    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                ()=> {
                    if(this.fromUrl){
                        this.router.navigateByUrl(this.fromUrl);
                    }else{
                        this.router.navigate(['user', userName]);
                    }
                },
                err =>{
                    this.loginForm.reset();
                    this.platformDetectionService.isPlatformBrowser() && 
                        this.userNameInput.nativeElement.focus();
                    alert('Invalid user name or password')
                });
    }
}