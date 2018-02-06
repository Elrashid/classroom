import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css']
})
export class CoursesHomeComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses: any[];

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesService.getCourses()
      .subscribe(courses => {
        console.log("doen");
         console.log(courses);
        this.courses = courses;
       });
  }

}
