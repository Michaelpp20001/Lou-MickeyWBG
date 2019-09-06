import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WbgListComponent } from './wbg-list/wbg-list.component';
import { RedWineComponent } from './red-wine/red-wine.component';
import { WhiteWineComponent } from './white-wine/white-wine.component';
import { SparklingWineComponent } from './sparkling-wine/sparkling-wine.component';


const routes: Routes = [
  {path: 'wbgList' , component: WbgListComponent},
  {path: 'redWine' , component: RedWineComponent},
  {path: 'whiteWine' , component: WhiteWineComponent},
  {path: 'sparklingWine' , component: SparklingWineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
