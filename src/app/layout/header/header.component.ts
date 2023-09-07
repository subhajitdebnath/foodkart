import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.userState.subscribe(userData => {
      this.isLoggedIn = this.authService.isAuthenticated();
    });
  }

}
