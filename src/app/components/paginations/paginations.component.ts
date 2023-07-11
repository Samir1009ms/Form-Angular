import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.scss']
})
export class PaginationsComponent {

  @Input() page!: number;
  @Input() totalPage!: number;
  @Output() isPrev = new EventEmitter();
  @Output() isNext = new EventEmitter();

  prevPage() {
    this.isPrev.emit();

  }
  nextPage() {
    this.isNext.emit();
  }
}
