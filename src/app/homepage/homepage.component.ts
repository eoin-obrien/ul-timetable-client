import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const STUDENT_ID_REGEX = /^\d{7,8}$/;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  studentId: string;

  onSubmit() {
    console.log('submitted');
  }

  constructor() { }

  ngOnInit() {
  }

}
