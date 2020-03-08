import { Directive, ElementRef } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[apShowIfLogged]'
})
export class ShowIfLoggedDirective {

  constructor(
    private element: ElementRef<any>,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    !this.userService.isLogged() 
      && this.element.nativeElement.remove();        
  }

}
