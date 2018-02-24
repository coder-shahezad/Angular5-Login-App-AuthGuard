import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {
  url = 'http://localhost:3000/data';
  userData = {};
  register = false;
  constructor() { }
  setLoginUser (userData) {
    this.userData = userData;
  }
  getLoginUser() {
    return this.userData;
  }

}
