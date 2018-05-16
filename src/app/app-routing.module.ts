import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }        from './main/main.component'
import { CommunicateComponent }   from './communicate/communicate.component'

import { courselistComponent }   from './courselist/courselist.component'
import { courseComponent }  	 from './course/course.component'
import { DetailComponent }        from './detail/detail.component'

const appRoutes: Routes = [
	//{ path: '', redirectTo: '/main', pathMatch: 'full' },
 	{ path:'',component:MainComponent },
 	{ path:'code',component:CommunicateComponent },
 	{ path:'courselist',component:courselistComponent},
 	{ path:'course',component:courseComponent},
 	{ path: '**', component: MainComponent },
 	{ path:'detail/:id',component:DetailComponent },
 	
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}