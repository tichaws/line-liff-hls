import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { ModalTemplate, TemplateModalConfig, SuiModalService } from 'ng2-semantic-ui';

export interface IContext {
  data:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('modalTemplate',{static:false})
  modalTemplate:ModalTemplate<IContext, string, string>
  constructor(
    // private modalService: NgbModal,
    config: NgbModalConfig,
    public modalService:SuiModalService) { 
    }

  ngOnInit() {
  }


  openModal(dynamicContent:string = "Example") {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
    config.isBasic = true
    config.closeResult = "closed!";
    config.context = { data: dynamicContent };

    this.modalService
        .open(config)
        .onApprove(result => { /* approve callback */ })
        .onDeny(result => { /* deny callback */});
  }

}
