import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
      $(document).ready(function(){
          /*$("button").click(function(){
              var div = $("div");
              div.toggle();
          });*/
      });
  }
}
