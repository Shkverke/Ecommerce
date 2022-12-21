import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "./validator/confirm-password.validator";
import {AuthService} from "../../../../core/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: [Validation.match('password', 'confirmPassword')],

    });

  constructor(private authService: AuthService,
              private router: Router
  ) {
  }


  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('invalid');
      return
    }

    console.log(this.form.value);
    this.authService.register(this.form.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/auth/login']);
    });
  }

}
