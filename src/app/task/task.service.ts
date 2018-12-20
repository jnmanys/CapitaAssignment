import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class TaskService {

    baseurl = "https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks/";
    requestHeaders = new HttpHeaders().set('Content-Type', 'json');

    constructor(private httpClient: HttpClient) { }

    getTaskList() {
        return this.httpClient.get(this.baseurl);
    }

    saveTask(task) {
        return this.httpClient.post(this.baseurl, task, {
            headers: this.requestHeaders
        })
    }

    deleteTaskFromList(taskId) {
        return this.httpClient.delete(this.baseurl + taskId, {
            headers: this.requestHeaders
        })
    }
}