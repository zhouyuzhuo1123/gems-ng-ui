import { 
	Component , 
	OnInit,
  HostListener,
  Directive
} from '@angular/core';

import { Router } from '@angular/router';
import { HeroService } from './main.service'
import { Hero } from '../service/hero'
export class Tab{
  text:string;
  type:string;
}

export class List{
  title:string;
  href:string;
  ispro:boolean;
}



export class Fac{
  factoryName:string;
  type:string;
  siteCode:string;
  list:List[];
}

const tabList : Tab[]= [
  {text:'全部',type:''},
  {text:'演示',type:'ys'},
  {text:'内部',type:'nb'},
  {text:'湘潭',type:'xt'},
  {text:'南充',type:'nc'},
  {text:'济南',type:'jn'},
  {text:'贵阳',type:'gy'},
  {text:'成都',type:'cd'},
  {text:'杭州湾',type:'hzw'},
]



const factoryList : Fac[]= [
  { 
    factoryName:'演示',
    type:'ys',
    siteCode:'1310',
    list:[
      {title:'mt',href:"",ispro:false},
      {title:'pad',href:"http://10.86.130.28:7078/gclient-pad",ispro:false},
      {title:'manage',href:"http://10.86.130.28:7088/login",ispro:false},
    ],
  },
  { 
    factoryName:'内部',
    type:'nb',
    siteCode:'1310',
    list:[
      {title:'mt',href:"",ispro:false},
      {title:'pad',href:"http://10.86.130.27:7777/nb-pad/",ispro:false},
      {title:'manage',href:"http://10.86.130.27:9000/login",ispro:false},
    ],
  },
  {
    factoryName:'湘潭',
    type:'xt',
    siteCode:'6321',
    list:[
      {title:'mt',href:"http://10.86.130.27:8010/gmes-client-pda/#!/views/index.html",ispro:false},
      {title:'pad',href:"http://10.86.130.27:8010/gmes-client-pad/#!/views/index.html",ispro:false},
      {title:'manage',href:"http://10.86.130.27:9001/manage/index",ispro:false},
      {title:'mt',href:"http://10.96.100.132/gmes-client-mt/#!/views/index.html",ispro:true},
      {title:'pad',href:"http://10.96.100.132/gmes-client-pad/#!/views/index.html",ispro:true},
      {title:'manage',href:"http://10.96.100.132/gmes/manage/index",ispro:true},
      {title:'prt',href:"http://10.96.100.175:7006/ime/manage/login",ispro:true},
    ],
  },
  {
    factoryName:'南充',
    type:'nc',
    siteCode:'2003',
    list:[
      {title:'mt',href:"http://10.72.251.70:7058/gmes-client-mt/",ispro:false},
      {title:'pad',href:"http://10.72.251.70:7068/gmes-client-pad/",ispro:false},
      {title:'manage',href:"http://10.72.251.70:7088/manage/index",ispro:false},
    ],
  },
  {
    factoryName:'济南',
    type:'jn',
    siteCode:'7340',
    list:[
      {title:'mt',href:"http://10.70.110.91:7058/gmes-client-mt/",ispro:false},
      {title:'pad',href:"http://10.70.110.91:7068/gmes-client-pad/",ispro:false},
      {title:'manage',href:"http://10.70.110.91:7088/manage/index",ispro:false},
    ],
  },
  {
    factoryName:'贵阳',
    type:'gy',
    siteCode:'5202',
    list:[
      {title:'mt',href:"http://10.54.10.207:7098/gmes-client-mt/",ispro:false},
      {title:'pad',href:"http://10.54.10.207:7068/#/login",ispro:false},
      {title:'manage',href:"http://10.54.10.207:7088/manage/index",ispro:false},
    ],
  },
  {
    factoryName:'成都',
    type:'cd',
    siteCode:'5333',
    list:[
      {title:'mt',href:"",ispro:false},
      {title:'pad',href:"http://10.55.1.64:7078/gclient-pad",ispro:false},
      {title:'manage',href:"http://10.55.1.64:7088/manage/index",ispro:false},
    ],
  },
  {
    factoryName:'杭州湾',
    type:'hzw',
    siteCode:'106Z',
    list:[
      {title:'mt',href:"http://10.35.180.46:7058/#!/views/index.html",ispro:false},
      {title:'pad',href:"http://10.35.180.46:7068/#!/views/index.html",ispro:false},
      {title:'manage',href:"http://10.35.180.46:7088/manage/index",ispro:false},
    ],
  },
]



@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HeroService]
})

export class MainComponent implements OnInit{
  private topicList:Array<any>;
  public  currentPage:number = 1;
  public  currentTab:string ='';
  public  selectList:Array<number> = new Array(1,2,3,4,5);
  public  show: boolean = false;
  public  tablist = tabList;
  public  factoryListA = factoryList;
  constructor(private heroService: HeroService,private router: Router) { 
	  
  }
  ngOnInit(): void {
    this.loadPage()
  }

  onClick() {
    console.log('ive been clicked');
  }

  @HostListener('document:scroll')
  onPageScroll(event) {
    this.show = this.checkIfScrolled()
  }

  checkIfScrolled() {
    return window.scrollY > Math.max(300, window.innerHeight / 3);
  }
  getPage(index:number): void{
    this.selectPage(index);
    this.loadPage()
  }
  selectPage(index:number) : void{
    this.currentPage = index;
    const arr:Array<number> = [];
    if(index === 1){
      for(let i = 0;i<5;i++){
        arr.push(index+i)
      }
    }
    if(index === 2){
      for(let i = -1;i<4;i++){
        arr.push(index+i)
      }
    }
    if(index > 2){
      for(let i = -2;i<3;i++){
        arr.push(index+i)
      }
    }
    this.selectList = arr;
  }

  next(){
    const page = this.currentPage+1;
    this.selectPage(page)
    this.loadPage()
  }
  prev(){
    const page = this.currentPage === 1 ? 1 : this.currentPage-1;
    this.selectPage(page)
    this.loadPage()
  }

  selectTab(tab:string): void{
    this.currentTab = tab;
    //this.selectPage(1)
    //this.loadPage()
    if(tab){
      this.factoryListA = factoryList.filter((item)=>{
        return item.type == tab;
      })
    }else{
      this.factoryListA = factoryList
    }
  }
  loadPage():void{
    this.heroService.getHeroes(this.currentPage,this.currentTab).then(data => this.topicList = data.data);
  }
  backtop(){
    document.documentElement.scrollTop =0;
  }

  gotoDetail(id): void {
    this.router.navigate(['/detail', id]);
  }
}