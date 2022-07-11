import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component'
import { AttackPatternComponent } from './attack-pattern/attack-pattern.component'
import { SearchComponent } from './search/search.component'


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'attack-pattern', component: AttackPatternComponent },
  { path: 'graph', component: GraphComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
