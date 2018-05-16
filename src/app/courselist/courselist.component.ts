import { 
	Component , 
	OnInit,
  HostListener,
  Directive
} from '@angular/core';

import { CourselistService } from './courselist.service'
import { ElMessageService } from 'element-angular'
const tableData: any[] = [{
  name: '水爷',
  date: '2017-08-19',
  address: '上海市普陀区金沙江路 1518 弄',
  address2: '上海市普陀区金沙江路 1518 弄',},{
  name: '水爷',
  date: '2017-08-19',
  address: '上海市普陀区金沙江路 1518 弄',
address2: '上海市普陀区金沙江路 1518 弄',},{
  name: '水爷',
  date: '2017-08-19',
  address: '上海市普陀区金沙江路 1518 弄',
address2: '上海市普陀区金沙江路 1518 弄',},{
  name: '水爷',
  date: '2017-08-19',
  address: '上海市普陀区金沙江路 1518 弄',
address2: '上海市普陀区金沙江路 1518 弄',}]


@Component({
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss'],
  providers: [CourselistService]
})


export class courselistComponent implements OnInit {
	public tabledata = tableData;
	public codeArr:Array<any>;
	public  show: boolean = true;
	public  dialog: boolean = false;
	public  person:string = '';
	public  course:string = '';
	public  planDate:string = '';
	public  time:string = '';
 	public  id:string = '';
	constructor(private message: ElMessageService,private courselistService : CourselistService) { 
	  
 	}
	ngOnInit(): void {
		this.initDate();
	}
	@HostListener('window:scroll')
	onPageScroll(event) {
        this.show = this.checkIfScrolled()
    }
    
    initDate(){
		this.courselistService.getCourseList().then((res)=>{
			this.tabledata = res.content
		});
    }

	checkIfScrolled() {
		return window.scrollY > Math.max(300, window.innerHeight / 3);
	}

	backtop(){
		document.documentElement.scrollTop =0;
	}

	rowClassNameFilter(row: any, index: number): string {
	  if (index === 1) {
	    return 'info-row';
	  } else if (index === 3) {
	    return 'positive-row';
	  }
	  return ''
	}

	handle(ref:any): void{
		const {
			person,
			course,
			planDate,
			time,
			id
		} = this.tabledata[ref.index];
		this.person = person;
		this.course = course;
		this.planDate = planDate;
		this.time = time;
		this.id = id;
		this.dialog = true;
	}

	handleTime(val){
		//this.planDate = val;
	}
	pushs(){
	  	const params = {
	  		person:this.person,
	  		course:this.course,
	  		planDate:this.planDate,
	  		time:this.time,
	  		id:this.id,
	  	};
	  	if(this.person && this.course){
	  		this.courselistService.putCourse(params).then((res)=>{
	  			this.message.show(`提交成功`);
	  			this.dialog = false;
	  			this.initDate();
	  		})
	  	}else{
	  		this.message.show('东西没填完就想提交！！！')
	  	}
	}
}