import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineService } from '../services/medine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  medicineForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private medicindeService:MedicineService){
    this.medicineForm = this.formBuilder.group({
        name:['',[Validators.required]],
        brand:['',[Validators.required]],
        price:['',[Validators.required]],
        quantity:['',[Validators.required]],
        expiryDate:['',[Validators.required]],
        notes:['']
    });
  }

  onSubmit(){
    console.log(this.medicineForm);
    var medicine = this.medicineForm.value;
 this.medicindeService.addMedicine(medicine).subscribe(result => {
   console.log(result);
 })
    
  }
}


