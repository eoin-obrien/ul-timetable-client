import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  studentId: string;

  constructor(private router: Router) {
  }

  onSubmit() {
    return this.router.navigate(['/timetable', this.studentId]);
  }

  ngOnInit() {
  }

}
