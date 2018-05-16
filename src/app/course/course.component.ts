import { Component, OnInit } from '@angular/core';
 import { ElMessageService } from 'element-angular'

 import { CourseService } from './course.service'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService],
})
export class courseComponent implements OnInit {
  public  person:string = '';
  public  course:string = '';
  public  planDate:string = '';
  public  time:string = '';
  constructor(private message: ElMessageService,private sourseService: CourseService) { 

  }
  ngOnInit() {
  	
  }

  handle(val){
  	this.planDate = val;
  }
  clearClickHandle(){
  
  }
  pushs(){
  	const params = {
  		person:this.person,
  		course:this.course,
  		planDate:this.planDate,
  		time:this.time,
  	};
  	if(this.person && this.course){
  		this.sourseService.setCourse(params).then((res)=>{
  			this.message.show(`提交成功`)
  		})
  	}else{
  		this.message.show('东西没填完就想提交！！！')
  	}
  }
}
