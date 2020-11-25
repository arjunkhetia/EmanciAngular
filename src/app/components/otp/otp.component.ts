import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  @ViewChild('ngOtpInput') ngOtpInputRef:any;

  config = {
    length:6,
    allowNumbersOnly: false,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: '*'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onOtpChange(event: any) {
    console.log(event);
  }

  setValue() {
    this.ngOtpInputRef.setValue('1a2b3c4d5e');
  }

}
