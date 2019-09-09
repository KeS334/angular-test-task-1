import { Component } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-task';
  date: Array <object>;
  constructor(svc: HttpService) {
    svc.getResponse().subscribe(response => {
          console.log(response);
          this.date = response.products;
        }, (error) => {
          console.log(error);
        });
  }
}
