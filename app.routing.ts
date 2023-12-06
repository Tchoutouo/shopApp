import { Routes } from "@angular/router";
import { SigninComponent } from "src/app/components/auth/signin/signin.component";
import { SignupComponent } from "src/app/components/auth/signup/signup.component";
import { ContainerComponent } from "src/app/components/container/container.component";
import { ProductComponent } from "src/app/components/product/product.component";

export const ROUTES : Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
]
