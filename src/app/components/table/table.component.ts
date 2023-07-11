import { Component, Input } from '@angular/core';
import { IData } from 'src/app/models/data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() data!: IData[];

}
