import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN';

  constructor() {
    this.role = 'ADMIN';
  }

  login() {
    return this.role;
  }
}
