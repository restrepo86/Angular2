import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathComponent } from './games/math/math.component';
import { AboutComponent } from './games/about/about.component';

const routes: Routes = [
  { path: "", component: MathComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
