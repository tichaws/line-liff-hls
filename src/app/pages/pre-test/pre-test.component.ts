import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-test',
  templateUrl: './pre-test.component.html',
  styleUrls: ['./pre-test.component.scss']
})
export class PreTestComponent implements OnInit {

  select :boolean = false
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  choice: FormGroup;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() { return this.choice.controls; }

  ngOnInit() {
    this.choice = this.formBuilder.group({
      answer: ['', Validators.required],
    },);
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.choice.invalid) {
      return;
    }

    let obj = this.choice.getRawValue()
    console.log(obj)
    alert(obj.answer)
  }

}
