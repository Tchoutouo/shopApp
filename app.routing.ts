import { Routes } from "@angular/router";
import { SigninComponent } from "src/app/components/auth/signin/signin.component";
import { SignupComponent } from "src/app/components/auth/signup/signup.component";
import { ContainerComponent } from "src/app/components/container/container.component";
import { ProductAdditionalInfoComponent } from "src/app/components/product-tabs/product-additional-info/product-additional-info.component";
import { ProductDescriptionComponent } from "src/app/components/product-tabs/product-description/product-description.component";
import { ProductReviewsComponent } from "src/app/components/product-tabs/product-reviews/product-reviews.component";
import { ProductVendorComponent } from "src/app/components/product-tabs/product-vendor/product-vendor.component";
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
    // pathMatch: 'full'
    children:[
      {
        path: "",
        redirectTo: "description",
        pathMatch: "prefix"
        
      },
      {
        path: 'description',
        component: ProductDescriptionComponent,
      },
      {
        path: 'additional-info',
        component: ProductAdditionalInfoComponent,
      },
      {
        path: 'vendor-info',
        component: ProductVendorComponent,
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent,
      },
    ]
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
