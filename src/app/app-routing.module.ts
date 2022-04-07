import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecieptHistoryComponent } from './reciept-history/reciept-history.component';
import { SubmittedBasketComponent } from './submitted-basket/submitted-basket.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: '**', redirectTo: '/login' },
  { path: "selected-basket", component: SubmittedBasketComponent },
  { path: "recieptHistory", component: RecieptHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
