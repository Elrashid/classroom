import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ConceptViewerComponent } from './concept-viewer/concept-viewer.component';
import { ConceptComponent } from './concept/concept.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesHomeComponent, LessonsComponent, ConceptsComponent, ConceptViewerComponent, ConceptComponent]
})
export class CoursesModule { }
