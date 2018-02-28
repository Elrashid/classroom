import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-concept-viewer',
  templateUrl: './concept-viewer.component.html',
  styleUrls: ['./concept-viewer.component.css']
})
export class ConceptViewerComponent implements OnInit {

  concept: any
  videoUrl: SafeResourceUrl
  // descriptionUrl: SafeResourceUrl
  // notesUrl: SafeResourceUrl

  constructor(private coursesService: CoursesService,
    private sanitizer: DomSanitizer, ) {

  }
  ngOnInit() {
    this.concept = this.coursesService.concept;
    if (this.concept.Media.youtube) {
      var dangerousVideoUrl = "https://www.youtube.com/embed/" + this.concept.Media.youtube + "?rel=0&autoplay=1";
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }
    // if (this.concept.Media.description) {
    //   var dangerousDescriptionUrl = "data/courses/course1/lesson1/concept1/" + this.concept.Media.description;
    //   this.descriptionUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousDescriptionUrl);
    // }
    // if (this.concept.Media.notes) {
    //   var dangerousNoteUrl = "data/courses/course1/lesson1/concept1/" + this.concept.Media.notes;
    //   this.notesUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousNoteUrl);
    // }
        
    // [Angular - Security](https://angular.io/guide/security#bypass-security-apis)
  }




}
