import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit{
    
    signupForm: FormGroup;
    @ViewChild('emailInput', null) emailInput: ElementRef<HTMLInputElement>
    
    constructor(
        private formBuilder: FormBuilder, 
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ){
        
    }

    ngOnInit(): void {
        const func = this.userNotTakenValidatorService.checkUserNameTaken();
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        })

        this.platformDetectorService.isPlatformBrowser() && 
                        this.emailInput.nativeElement.focus();
    }

    signup(){
        if(this.signupForm.valid && !this.signupForm.pending){
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signupService
                .signup(newUser)
                .subscribe(
                    ()=> this.router.navigate(['']),
                    err => console.log(err)
                );
        }
    }
}