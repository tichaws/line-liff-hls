import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { InstructionComponent } from './instruction/instruction.component';
import { PreTestComponent } from './pre-test/pre-test.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SuiModule, SuiModalModule } from 'ng2-semantic-ui';
import { CustomerService } from '../services/customer/customer.service';


@NgModule({
  declarations: [PagesComponent, HomeComponent, InstructionComponent, PreTestComponent],
  imports: [
    FormsModule,
    CommonModule,
    PagesRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    SuiModule,
    SuiModalModule,
  ],

})
export class PagesModule { }
