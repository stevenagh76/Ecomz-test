import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomzExecutionComponent } from './ecomz-execution/ecomz-execution.component';
import { EcomzTestComponent } from './ecomz-test/ecomz-test.component';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [

{path:"",component:EcomzTestComponent},
{path:'execution',component:EcomzExecutionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
