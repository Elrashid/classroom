import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoursesService {

  constructor(
    private http: HttpClient) { }


  private coursesUrl = 'data/courses/';  // URL to web api
  selectedCourse: any;
  selectedLesson: any;
  selectedConcept: any;

  getCourses(): Observable<any[]> {
    // this.concept = null;
    return this.http.get<any[]>(this.coursesUrl + 'index.json')
      .pipe(
      catchError(this.handleError('getHeroes', []))
      );

  }

  getCourse(courseId: any): Observable<any> {
    return this.getCourses()
      .pipe(
      map(courses => courses.find(course => course.id == courseId))
      );
  }

  getLessons(courseId: any): Observable<any[]> {
    // this.concept = null;
    return this.http
      .get<any[]>(this.coursesUrl + `course${courseId}/index.json`)
      .pipe(
      catchError(this.handleError('getLessons', []))
      );
  }

  getLesson(courseId: any, lessonId: any): Observable<any> {
    return this.getLessons(courseId)
      .pipe(
      map(lessons => lessons.find(lesson => lesson.id == lessonId))
      );
  }

  getConcepts(courseId: any, lessonId: any): Observable<any[]> {
    return this.http.get<any[]>(this.coursesUrl + `course${courseId}/lesson${lessonId}/index.json`)
      .pipe(
      catchError(this.handleError('getConcepts', []))
      );
  }


  getConcept(courseId: any, lessonId: any, conceptId: any): Observable<any> {
    return this.getConcepts(courseId, lessonId)
      .pipe(
      map(concepts => concepts.find(concept => concept.id == conceptId))
      );
  }

  getMedia(courseId: any, lessonId: any, conceptId: any): Observable<any[]> {
    return this.http.get<any[]>(this.coursesUrl + `course${courseId}/lesson${lessonId}/concept${conceptId}/index.json`)
      .pipe(
      catchError(this.handleError('getConcepts', []))
      );
  }


  async setConcept(courseId: number, lessonId: number, conceptId: number) {

    this.clearConcept();
    var tmpConcept: any = {};

    await this.getCourse(courseId).toPromise().then(
      course => tmpConcept.Course = course
    )

    await this.getLesson(courseId, lessonId).toPromise().then(
      lesson => tmpConcept.Lesson = lesson
    )

    await this.getConcept(courseId, lessonId, conceptId).toPromise().then(
      concept => tmpConcept.Concept = concept
    )

    await this.getMedia(courseId, lessonId, conceptId).toPromise().then(
      media => tmpConcept.Media = media
    )

    this.concept = tmpConcept;
  }

  async clearConcept() { this.concept = null }


  concept: any = null;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
