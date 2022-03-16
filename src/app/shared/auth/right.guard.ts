import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { CurrentUserService, Right } from './current-user.service';

@Injectable({
  providedIn: 'root',
})
export class RightGuard implements CanActivate {
  constructor(private currentUserService: CurrentUserService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.currentUserService.hasRight(route.data['right']);
  }
}
