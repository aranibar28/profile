import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public date = new Date();
  public load_btn: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  myForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
  });

  send_email() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.load_btn = true;
  }

  validators(name: string) {
    const input = this.myForm.controls[name];
    return input.errors && input.touched;
  }
}
