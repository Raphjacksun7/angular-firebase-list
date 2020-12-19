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

  getStudents() {
    return this.firestore.collection("Students").snapshotChanges();
  }

  newStudent(record: Student) {
    return this.firestore.collection("Students").add(record);
  }

  updateStudent(recordID, record) {
    return this.firestore.doc<Student>(`Students/${recordID}`).update(record);
  }
}
