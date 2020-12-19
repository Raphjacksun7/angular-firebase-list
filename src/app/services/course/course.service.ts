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

  //Call snapshotChanges method which will get records and also subscribe it to get updates
  getCourses() {
    return this.firestore.collection("Courses").snapshotChanges();
  }

  //Create a new record in the specified collection using add method
  newCourses(record: Course) {
    return this.firestore.collection("Courses").add(record);
  }
}
