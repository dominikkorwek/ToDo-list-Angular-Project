import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Task} from "../../mock-tasks";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string ="";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddTask = value
    );
  }

  onSubmit() {
    if(!this.text || !this.day){
      alert("Fill everything!");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
