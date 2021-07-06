import { Component, OnInit ,Output , Input, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { HttpClient } from '@angular/common/http';
import { Post } from 'post';

  

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @Output() btnClick  = new EventEmitter()
  posts: any[]= []
  title:string | any 
  data: any ; 


  constructor(private http: HttpClient , private postService:PostService) { 
  
  }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts=>{this.posts = posts;
    console.log(posts)
  }) 
}

  getDataFromApi(body:any){
    this.postService.getData(body).subscribe(data=>{ 
      this.data = body
      console.log(data.body)})
  }

  onDelete(post:Post){
    this.postService.deletePost(post).subscribe(()=>(this.posts = this.posts.filter(t => t.id !== post.id)
    ))
    console.log(this.posts)
  }
  

  

 
}
