import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { PreTestComponent } from './pre-test/pre-test.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component:HomeComponent  },
      { path: 'instruction', component:InstructionComponent  },
      { path: 'pre-test', component:PreTestComponent  },
      // { path: 'business-key', loadChildren: () => import('./business-key/business-key.module').then(m => m.BusinessKeyModule) },
      // { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
