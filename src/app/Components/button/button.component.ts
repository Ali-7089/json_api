import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Post } from 'post';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() title:string ='';
  @Input() Post: any;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onshowPost : EventEmitter<Post> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(Post:any){
    this.onDeleteTask.emit(Post )
  
   }


 
  

 

}
