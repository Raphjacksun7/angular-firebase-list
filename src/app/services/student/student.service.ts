import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  courses: string[];
}

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private firestore: AngularFirestore) {}

  //Call snapshotChanges method which will get records and also subscribe it to get updates
  getStudents() {
    return this.firestore.collection("Students").snapshotChanges();
  }

  //Create a new record in the specified collection using add method
  newStudent(record: Student) {
    return this.firestore.collection("Students").add(record);
  }

  //Update record by taking ID then calling update method
  updateStudent(recordID, record) {
    return this.firestore.doc<Student>(`Students/${recordID}`).update(record);
  }
}
