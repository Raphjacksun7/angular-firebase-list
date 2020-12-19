import { Component, OnInit } from "@angular/core";
import { StudentService, Student } from "../../services";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import * as faker from "faker";
import { CourseComponent } from "../course/course.component";

@Component({
  selector: "table-cmp",
  moduleId: module.id,
  styleUrls: ["./student.component.scss"],
  templateUrl: "student.component.html",
})
export class StudentComponent implements OnInit {
  modalRef: BsModalRef;
  students: Student[];
  isLoading = true;
  page: number = 1;

  constructor(
    private studentService: StudentService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getStudents();
  }

  // Get list of students by using Student Service method
  getStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = [];
      data.forEach((e: any, index) => {
        this.students.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        });

        // Verify if the loop of the array (data) is at teh end, if so then turn the loader to false

        if (data.length == index + 1) {
          this.isLoading = false;
          console.log(this.students);
        }
      });
    });
  }

  // This method permits to create random data of students
  dataGenerator() {
    for (let index = 1; index < 200; index++) {
      this.createRecord({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        courses: [],
      });
    }
  }

  // This method permits to save the random data to the server
  createRecord(record: Student) {
    this.studentService
      .newStudent(record)
      .then((resp) => console.log(resp))
      .catch((error) => {
        console.log(error);
      });
  }

  // Launch a modal component then pass data through it
  studentCourses(student: Student) {
    const initialState = {
      student: student,
    };
    this.modalRef = this.modalService.show(CourseComponent, { initialState });
    this.modalRef.content.closeBtnName = "Close";
  }
}
