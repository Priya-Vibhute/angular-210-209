import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"data-binding",
        component:DatabindingComponent
    }
];
