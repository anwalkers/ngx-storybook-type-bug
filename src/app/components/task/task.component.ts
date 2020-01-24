import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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

  @Output() public onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() public onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  // Breaks story
  // constructor(private elem: ElementRef) {}

  ngOnInit() {}
}
