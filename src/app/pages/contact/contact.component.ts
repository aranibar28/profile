import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare function init_forms(): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public load_btn: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
