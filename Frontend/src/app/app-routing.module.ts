import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WbgListComponent } from './wbg-list/wbg-list.component';
import { RedWineComponent } from './red-wine/red-wine.component';
import { WhiteWineComponent } from './white-wine/white-wine.component';
import { SparklingWineComponent } from './sparkling-wine/sparkling-wine.component';
import { NewWbgComponent } from './new-wbg/new-wbg.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UpdateWbgComponent } from './update-wbg/update-wbg.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DeletedWinesComponent } from './deleted-wines/deleted-wines.component';


const routes: Routes = [
  {path: '', redirectTo: '/wbgList', pathMatch: 'full'},
  {path: 'wbgList' , component: WbgListComponent},
  {path: 'redWine' , component: RedWineComponent},
  {path: 'whiteWine' , component: WhiteWineComponent},
  {path: 'sparklingWine' , component: SparklingWineComponent},
  {path: 'newWBG' , component: NewWbgComponent},
  {path: 'searchResults' , component: SearchResultsComponent},
  {path: 'updateWbg' , component: UpdateWbgComponent},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'previousWines' , component: DeletedWinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
