import { 
	Component, 
	OnInit
} from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//mport 'rxjs/add/operator/switchMap';

import { HeroService } from '../main/main.service'
@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [HeroService],
})

export class DetailComponent implements OnInit{
	public id:string;
	public content:string;
	constructor(
		private route: ActivatedRoute,
	  private router: Router,
	  private heroService : HeroService
	) {}

	ngOnInit() {
	  this.id = this.route.snapshot.paramMap.get('id');
	  this.heroService.getHeroesDetal(this.id).then((data)=>{
      this.content = data.data.content;
	  })
	}

}