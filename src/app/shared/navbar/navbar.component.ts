import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { AuthService } from "../../services/auth/auth.service";

@Component({
  moduleId: module.id,
  selector: "navbar-cmp",
  templateUrl: "navbar.component.html",
})
export class NavbarComponent implements OnInit {
  private nativeElement: Node;
  private toggleButton;

  public isCollapsed = true;
  @ViewChild("navbar-cmp", { static: false }) button;

  constructor(private element: ElementRef, private readonly auth: AuthService) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName("nav")[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.add("navbar-transparent");
      navbar.classList.remove("bg-white");
    }
  }
}
