import { Directive, ElementRef } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
  selector: '[apImmediateClick]'
})
export class ImmediateClickDirective {

  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlatformDetectorService) {}

    ngOnInit(): void {    
        this.platFormDetector.isPlatformBrowser &&
        this.element.nativeElement.click();

}

}
