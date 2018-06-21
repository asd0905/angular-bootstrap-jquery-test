import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-button-checkbox',
  templateUrl: './ngb-button-checkbox.component.html',
  styleUrls: ['./ngb-button-checkbox.component.css']
})
export class NgbButtonCheckboxComponent implements OnInit {

    model = {
        left: true,
        middle: false,
        right: false
    };

  constructor() { }

  ngOnInit() {
  }

}
