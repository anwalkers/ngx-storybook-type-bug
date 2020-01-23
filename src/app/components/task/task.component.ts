import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from 'src/app/@types/app';

@Component({
  selector: 'task-item',
  template: `
    <div class="list-item">
      <input type="text" [value]="task.title" readonly="true" (click)="onPinTask"/>
    </div>
  `,
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: TaskItem;
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}