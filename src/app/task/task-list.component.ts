import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TaskService } from "./task.service"
import { Task } from "../task";

@Component({
    selector: "task-list-component",
    templateUrl: "./task-list.component.html",
    styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {

    taskList: any[];
    strTitle = new FormControl('');
    strDesc = new FormControl('');
    newTask: Task;
    showInsert = false;

    constructor(private _taskService: TaskService) { }

    ngOnInit() {
        this.refresh();
        this.newTask = new Task();
    }

    refresh() {
        this._taskService.getTaskList().subscribe(data => {
            this.taskList = data['documents'];
        });
    }

    emptyTask() {
        this.newTask = new Task();
        this.newTask.fields.title.stringValue = '';
        this.newTask.fields.description.stringValue = '';
        this.taskList.push(this.newTask);
        this.showInsert = true;
    }

    cancel() {
        this.taskList = this.taskList.filter(p => p.name != "");
        this.showInsert = false;
    }

    insert() {
        const aTask = new Task();

        aTask.fields.title.stringValue = this.strTitle.value;
        aTask.fields.description.stringValue = this.strDesc.value;

        this._taskService.saveTask(aTask).subscribe(data => {
            this.refresh();
            this.showInsert = false;
        });
    }


    delete(taskId) {
        taskId = taskId.split('/')[taskId.split('/').length - 1];
        this._taskService.deleteTaskFromList(taskId).subscribe(data => { this.refresh(); });
    }

}