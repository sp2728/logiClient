import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { PreviousRouteService } from './previous-route.service';



@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private localStorageService:LocalStorageService, private previousRouteService:PreviousRouteService, private router:Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.localStorageService.getUser();
      if (!this.previousRouteService.previousUrl
        && (user)) {
        this.router.navigate(['/profile']);
        return false;
      } else {
        return true;
      }
  }
  
}
