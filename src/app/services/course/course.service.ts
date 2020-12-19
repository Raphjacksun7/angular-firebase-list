import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

export interface Course {
  id: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private firestore: AngularFirestore) {}

  getCourses() {
    return this.firestore.collection("Courses").snapshotChanges();
  }

  newCourses(record: Course) {
    return this.firestore.collection("Courses").add(record);
  }
}
