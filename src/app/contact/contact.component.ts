import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  SendMessage: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone_number: new FormControl(null, [Validators.pattern(/^01[0-2,5][0-9]{8}$/)]),
    message: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)])
  });
  send(data: any) {
    console.log(data.value);
     this.SendMessage.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
