import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName;
  userPassword;
  errorMessage: string;

  constructor(
    private zone: NgZone,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userLoginData = JSON.parse(localStorage.getItem('admin.example.com'));
    if (userLoginData) {
      this.router.navigate(['/dashboard'], {});
    }
  }

  doLogin(): void {
    this.errorMessage = '';
    if (this.userName === 'kumar' && this.userPassword === 'Kumar@123'){
      const userData = {
        username : 'kumar'
      };
      localStorage.setItem('admin.example.com', JSON.stringify(userData));
      this.zone.run(() => {
        this.router.navigate(['/dashboard'], {});
      });
    } else {
      this.errorMessage = 'Your authentication information is incorrect. Please Check your details';
    }
  }
}
