import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
// @ts-ignore
import * as Diff from 'text-diff'
  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public diff: any;
  public textDiff: any;
  public diffHtml: any;
  // @ts-ignore
  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      input: ['', Validators.required],
      inputFirst: ['']
    })
  }

    compare() {
    this.diff = new Diff();
    this.textDiff = this.diff.main(this.form.value.inputFirst, this.form.value.input);
    this.diffHtml = this.diff.prettyHtml(this.textDiff)
  }

 }
