import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  month:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  year:number[] = [19,20,21,22,23,24,25,26,27,28,29,30];



  form: FormGroup;
  isFlip: boolean = false;
  get CardNumber(): FormControl {
    return this.form.get('cardNumber') as FormControl;
  }
  get CVC(): FormControl {
    return this.form.get('cvc') as FormControl;
  }
  get Name(): FormControl {
    return this.form.get('name') as FormControl;
  }
  get Month(): FormControl {
    return this.form.get('month') as FormControl;
  }
  get Year(): FormControl {
    return this.form.get('year') as FormControl;
  }
  constructor(private fb: FormBuilder) {
    
  }
  initForm() {
    this.form = this.fb.group({
      name: [],
      month: [],
      year: [],
      cardNumber: [],
      cvc: []
    })
  }

  ngOnInit(): void {
    this.initForm();
  }
  focus() {
    this.isFlip = true;
  }
  blur(){
    this.isFlip = false;

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  } 

  postForm(){
    console.log(this.form.value);
  }

}
