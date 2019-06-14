import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private httpClient: HttpClient){}

  get_data(){
    this.httpClient.get("http://139.59.85.105:4040/get_todos").subscribe((res)=>{
        console.log(res);
    });
}

add_data(){
  this.httpClient.post("http://139.59.85.105:4040/add_todo", {
  status: "false",
  timestamp: "1560334340.002",
  title: "renu"
}).subscribe(res => { console.log(res); })
}

update_data(){
  this.httpClient.post("http://139.59.85.105:4040/update_todo", {
    title: "darshan",
    todo_id: "5d0224a49157590c226936e9"
}).subscribe(res => { console.log(res); })
}

del_data(){
  this.httpClient.post("http://139.59.85.105:4040/delete_todo", {
    todo_id: "5d0224a49157590c226936e9"
}).subscribe(res => { console.log(res); })
}
}
