import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private coursesService: CoursesService, ) { }

  concepts: any[];
  sub: Subscription;
  subParent: Subscription;
  courseId: number;
  lessonId: number;
  conceptId: number;

  ngOnInit() {
    this.subParent = this.route.parent.params.subscribe(paramsParent => {
      this.courseId = +paramsParent['courseId'];
      if (this.sub) { this.sub.unsubscribe(); }
      this.sub = this.route.params.subscribe(params => {
        this.lessonId = +params['lessonId'];
        this.getConcepts(this.courseId, this.lessonId);
      });
    });

  }

  ngOnDestroy() {
    if (this.subParent) { this.subParent.unsubscribe(); }
    if (this.sub) { this.sub.unsubscribe(); }
  }

  getConcepts(courseId: number, lessonId: number): void {
    this.coursesService.getConcepts(courseId, lessonId)
      .subscribe(concepts => {
        console.log("doen");
        console.log(concepts);
        this.concepts = concepts;
      });
  }

  view(id: number) {
    console.log(id);
    this.conceptId= id;
    this.coursesService.concept = id;
  }

}
