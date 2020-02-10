import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private list = [ {
    name: 'Victorique',
    desc: 'Amazing Chocolate Mousse Cake Recipe',
    link: 'https://www.bonappetit.com/test-kitchen/how-to/article/dreamy-chocolate-mousse'
  }]

  constructor() { 
    
  }

  fetchList() {

    console.log(this.list);
    
    return this.list;
  }
}
