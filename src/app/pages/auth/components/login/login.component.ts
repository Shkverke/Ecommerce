import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService, CartService} from "../../../../core/services";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  sub$ = new Subject();

  constructor(private router: Router,
              private authService: AuthService,
              private cartService: CartService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('invalid');
    }

    console.log(this.form.value);
    this.authService.login(this.form.value)
      .pipe(
        takeUntil(this.sub$),
        tap(() => {
          this.cartService.getCart().subscribe();
        })
  )
          .subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }
}
