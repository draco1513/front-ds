import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  // styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: UntypedFormGroup;
  errorMsg = '';
  // return: string;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private fb: UntypedFormBuilder,
    private jwtAuth: JwtAuthService,
    private egretLoader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();
  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    const password = new UntypedFormControl('', Validators.required);

    this.signinForm = new UntypedFormGroup({
      username: new UntypedFormControl('Watson', Validators.required),
      password: new UntypedFormControl('12345678', Validators.required),
      rememberMe: new UntypedFormControl(true),
    });
  }

  onSubmit() {
    if (!this.signinForm.invalid) {
      // do what you wnat with your data
      console.log(this.signinForm.value);
    }
  }
  // ngAfterViewInit() {
  //   // this.autoSignIn();
  // }

  ngOnDestroy() {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }

  signin() {
    const signinData = this.signinForm.value;

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';

    this.jwtAuth.signin(signinData.username, signinData.password).subscribe(
      (response) => {
        this.router.navigateByUrl(this.jwtAuth.return);
      },
      (err) => {
        this.submitButton.disabled = false;
        this.progressBar.mode = 'determinate';
        this.errorMsg = err.message;

        // console.log(err);
      }
    );
  }

  autoSignIn() {
    if (this.jwtAuth.return === '/') {
      return;
    }
    this.egretLoader.open(
      `Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(
        0,
        20
      )}...`,
      { width: '320px' }
    );
    setTimeout(() => {
      this.signin();
      console.log('autoSignIn');
      this.egretLoader.close();
    }, 2000);
  }
}
