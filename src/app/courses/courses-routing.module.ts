import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ConceptViewerComponent } from './concept-viewer/concept-viewer.component';
import { ConceptComponent } from './concept/concept.component';

const routes: Routes = [
  {
    path: 'courses', component: CoursesHomeComponent, children: [
      {
        path: ':courseId/lessons', component: LessonsComponent, children: [
          {
            path: ':lessonId/concepts', component: ConceptsComponent, children: [
              {
                path: ':conceptId', component: ConceptComponent
              },
            ]
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
