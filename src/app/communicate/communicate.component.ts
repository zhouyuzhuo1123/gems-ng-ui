import { 
	Component , 
	OnInit,
  HostListener,
  Directive
} from '@angular/core';

import { ServiceCodeService } from './communicate.service'

@Component({
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css'],
  providers: [ServiceCodeService]
})

export class CommunicateComponent implements OnInit {
	public codeArr:Array<any>;
	public  show: boolean = false;
	constructor(private serviceCodeService : ServiceCodeService) { 
	  
 	}
	ngOnInit(): void {
		this.serviceCodeService.getServiceList().then((res)=>{
			this.codeArr = res.content
		});
	}
	@HostListener('window:scroll')
	onPageScroll(event) {
        this.show = this.checkIfScrolled()
    }

	checkIfScrolled() {
		return window.scrollY > Math.max(300, window.innerHeight / 3);
	}

	backtop(){
		document.documentElement.scrollTop =0;
	}
}