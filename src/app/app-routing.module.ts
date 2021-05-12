import { LoginComponent } from './components/conta/login/login.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Views/home/home.component";
import {ProductCrudComponent} from "./Views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserCreateComponent } from './components/utilizadores/user-create/user-create.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './conta/shared/auth.guard';
import { AutenticacaoComponent } from './views/autenticacao/autenticacao.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children:[
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "products",
        component: ProductCrudComponent
      },
      {
        path:"products/create",
        component: ProductCreateComponent
      },
      {
        path:"products/update/:id",
        component: ProductUpdateComponent
      },
      {
        path:"products/delete/:id",
        component: ProductDeleteComponent
      },
      {
        path: "users",
        component: UserCrudComponent
      },
      {
        path:"user/create",
        component: UserCreateComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AutenticacaoComponent,
    children:[
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: UserCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
