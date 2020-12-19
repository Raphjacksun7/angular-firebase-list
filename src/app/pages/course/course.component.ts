import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { CourseService, StudentService, Student, Course } from "../../services";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {
  closeBtnName: string;
  student: Student;
  courses: Course[] = [];
  updateCourses: Course[] = [];
  selected = [];
  isLoading = true;
  updateBtn = "Update";

  constructor(
    public bsModalRef: BsModalRef,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe((data) => {
      data.forEach((e: any, index) => {
        this.courses.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        });
        this.getStudentCourses(e);
      });
    });
  }

  getStudentCourses(e) {
    if (this.student.courses.length == 0) {
      this.isLoading = false;
      console.log(this.selected);
      return;
    }
    this.student.courses.forEach((stdCourses, index) => {
      if (stdCourses == e.payload.doc.id) {
        this.selected.push(e.payload.doc.data()["name"]);
      }
      if (this.student.courses.length == index + 1) {
        this.isLoading = false;
        console.log(this.selected);
      }
    });
  }

  update() {
    this.updateBtn = "Updating...";
    this.student.courses = this.selected;
    console.log(this.student);
    this.studentService
      .updateStudent(this.student.id, this.student)
      .then((res) => {
        this.updateBtn = "Updated";
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        this.updateBtn = "Error try again";
      });
  }
}
