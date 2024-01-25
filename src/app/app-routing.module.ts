import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { UserComponent } from './ui/user/pages/user.component';
// Define las rutas de tu aplicación
const routes: Routes = [
  { path: '', component: UserComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }