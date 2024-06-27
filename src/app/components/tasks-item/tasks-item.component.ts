import {Component, Input, Output,EventEmitter} from '@angular/core';
import {Task} from "../../mock-tasks";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  @Input() task:Task = {text:'',reminder:false,day:''};
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  font = faTimes;

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }
}
