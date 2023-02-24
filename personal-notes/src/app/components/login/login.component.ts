import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage:string;
  requiredMessage: string;
  LoginForm!: FormGroup;

  constructor(public authService:AuthService, private formBuilder:FormBuilder){
    this.errorMessage = "";
    this.requiredMessage = "Required";

    this.LoginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(){

  }

  login(userName:string, password:string):boolean{
    this.errorMessage = '';
    if(!this.authService.login(userName, password)){
      this.errorMessage = "Login Error: Username/password invalid.";
      setTimeout(()=>{
        this.errorMessage = "";
      }, 3000);
    }
    this.LoginForm.setValue({userName:"", password:""});
    return false;
  }

  logout():boolean{
    this.authService.logout();
    return false;
  }

}
