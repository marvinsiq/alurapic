import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value = '';

  // padrao de projeto Debounce
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    // Só executa o subscribe depois de 300ms.
    // subscribe irá escutar o evento de debounce.next (disparado no template)
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
