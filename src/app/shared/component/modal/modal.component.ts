import { Component, OnInit } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from "ng2-semantic-ui"

interface IConfirmModalContext {
  title: string;
  question: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isClosable: boolean;
  transitionDuration: number;
  size: string;

  constructor(title: string, question: string, size = ModalSize.Small) {
    // super(ConfirmModalComponent, { title, question });

    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = size;
  }

  ngOnInit() {
  }

}
