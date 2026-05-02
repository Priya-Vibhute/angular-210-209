import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ServiceExampleComponent } from './components/service-example/service-example.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

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
    },
    {
        path:'pipes',
        component:PipesComponent
    },
    {
        path:'input-output',
        component:InputOutputComponent
    },
    {
        path:'directives',
        component:DirectivesComponent
    },
    {
        path:'services',
        component:ServiceExampleComponent
    },
    {
        path:'observables',
        component:ObservablesComponent
    },
    {
        path:'lifecycle',
        component:LifecycleComponent
    },
    {
        path:'recipes',
        component:RecipesComponent
    },
    {
        path:'recipes/:recipeId',
        component:RecipeDetailComponent
    }
];
