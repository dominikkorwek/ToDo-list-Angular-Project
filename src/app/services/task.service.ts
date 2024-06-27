import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import {Task} from "../mock-tasks";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';


  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task):Observable<Task>{
    const delUrl:string = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(delUrl);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const updUrl:string = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(updUrl,task, httpOptions);
  }

  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
