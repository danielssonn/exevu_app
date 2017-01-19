import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to ExeVUE';
  
  constructor() {
    console.log('constr');
  }
   openDialog () {
    console.log('you!');
  }
}
