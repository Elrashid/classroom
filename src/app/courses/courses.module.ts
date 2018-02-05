import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ConceptsComponent } from './concepts/concepts.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesHomeComponent, LessonsComponent, ConceptsComponent]
})
export class CoursesModule { }
