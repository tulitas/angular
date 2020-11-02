import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanOpenPageGuard implements CanActivate {
  constructor(private router: Router,
    private authService:AuthService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (state.url != "/login") {
      
      if (! this.authService.isUsernameCorrect()) {
        this.router.navigateByUrl("/login");
        return false;
      }
      else
        return true;
    }
    else
      return true;
  }

}
