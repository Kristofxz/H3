import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      const user = this.userService.getUser();
    
      // Ellenőrizd, hogy a felhasználó admin-e
      if (user && user.isAdmin) {
        return true; // Admin jogosultság esetén engedélyezi az útvonalat
      }
    
      // Ha nem admin vagy nincs bejelentkezve, navigáljon a kezdőoldalra
      this.router.navigateByUrl('/');
      return false;
    }
    
}
