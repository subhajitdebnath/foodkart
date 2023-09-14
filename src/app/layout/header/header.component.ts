import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private lsService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userState.subscribe(userData => {
      this.isLoggedIn = this.authService.isAuthenticated();
    });
  }

  onLogout(){
   this.lsService.removeItem('authData');
    // Route to login page
  this.router.navigate(['login']);
  }
}
