import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-visa-application',
  templateUrl: './visa-application.component.html',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class VisaApplicationComponent implements OnInit {
  visaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.visaForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      visaNumber: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]], // Ensures CVV is 3 digits
      validationDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.visaForm.valid) {
      console.log(this.visaForm.value);
      alert('تم حفظ البيانات بنجاح');
    } else {
      this.visaForm.markAllAsTouched();
    }
  }
}
