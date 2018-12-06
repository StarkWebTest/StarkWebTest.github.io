import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  localTime = 0;

  ngOnInit() {
    this.localTime = Date.now();
  }

  // constructor() {
  //   setInterval(() => {
  //     this.localTime = Date.now();
  //   }, 100000);
  // }

  isDayTime(local, lower, upper) {
    if (local > lower && local < upper) {
      console.log(local);
      return true;
    } else {
      return false;
    }
  }

  isNightTime(local, lower, upper) {
    if (local < lower || local > upper) {
      return true;
    } else {
      return false;
    }
  }
}
