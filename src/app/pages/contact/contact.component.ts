import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from 'src/app/services/public.service';
declare function init_forms(): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public load_btn: boolean = false;
  public questions: Array<any> = [];

  constructor(private publicService: PublicService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.questions = this.publicService.questions;
    init_forms();
  }

  myForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    subject: [, [Validators.required]],
    message: [, [Validators.required]],
  });

  send_email() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.load_btn = true;
    setTimeout(() => {
      this.load_btn = false;
      console.log(this.myForm.value);
    }, 3000);
  }

  validators(name: string) {
    const input = this.myForm.controls[name];
    return input.errors && input.touched;
  }
}
