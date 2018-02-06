import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, ) { }

  lessons: any[];
  sub: Subscription;
  id: number;

  ngOnInit() {
    console.log("ffffffffffff");
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['courseId'];
      this.getLessons(this.id);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  getLessons(courseId: number): void {
    this.coursesService.getLessons(courseId)
      .subscribe(lessons => {
        console.log("doen");
        console.log(lessons);
        this.lessons = lessons;
      });
  }
}
