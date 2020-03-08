import { Directive, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[apShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  nativeElementParent: any;
  currentElement: ElementRef<any>;

  constructor(
    private element: ElementRef<any>,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.nativeElementParent = this.element.nativeElement.parentNode;
    this.currentElement = this.element;

    this.userService.getUser().subscribe(user => {
      if (user) {
        this.nativeElementParent.appendChild(this.currentElement.nativeElement);
      } else {
        this.currentElement = this.element;
        this.currentElement.nativeElement.remove();
      }
    });

  }

}
