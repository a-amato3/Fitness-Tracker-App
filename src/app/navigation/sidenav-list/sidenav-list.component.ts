import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../modules/auth/shared/auth.service';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    }

    onLogout() {
      this.onClose();
      this.authService.logout();
    }

  onClose() {
    this.closeSidenav.emit();
  }

}
