import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsConnectedGuard implements CanActivate {
  constructor(public userService: UserService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.userService.login() === 'ADMIN' ||
      this.userService.login() === 'USER'
    ) {
      console.log('connect');
      return true;
    } else {
      this.router.navigate(['/homepage']);
      return false;
    }
  }
}
