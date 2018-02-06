import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {
  constructor(private route: ActivatedRoute, private coursesService: CoursesService, ) { 
       console.log("000000000000000000000");
      }

  concepts: any[];
  sub: Subscription;
  subParent: Subscription;
  subParentParent: Subscription;
  courseId: number;
  lessonId: number;
  conceptId: number;

  ngOnInit() {
    console.log("1111111111111111111111111");
    this.subParentParent = this.route.parent.parent.params.subscribe(paramsParentParent => {
      console.log("222222222222222222222222222222");
      this.courseId = +paramsParentParent['courseId'];
      if (this.sub) { this.sub.unsubscribe(); }
      this.subParent = this.route.parent.params.subscribe(paramsParent => {
        console.log("333333333333333333333333333");
        this.lessonId = +paramsParent['lessonId'];
        if (this.sub) { this.sub.unsubscribe(); }
        this.sub = this.route.params.subscribe(params => {
          console.log("55555555555555555555555555");
          this.conceptId = +params['conceptId'];
          console.log( this.conceptId);

          this.setConcept(this.courseId, this.lessonId, this.conceptId);
        });
      });
    });

  }

  ngOnDestroy() {
    if (this.subParentParent) { this.subParent.unsubscribe(); }
    if (this.subParent) { this.subParent.unsubscribe(); }
    if (this.sub) { this.sub.unsubscribe(); }
  }

  setConcept(courseId: number, lessonId: number, conceptId: number): void {
     this.coursesService.setConcept(courseId, lessonId, conceptId)
  }



}
