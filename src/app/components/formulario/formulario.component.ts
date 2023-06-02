import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  proveedorForm: FormGroup;
  steps: MenuItem[];
  currentStep = 0;

  constructor(private formBuilder: FormBuilder) {
    this.proveedorForm = this.formBuilder.group({
      tipoProveedor: ['', Validators.required],
      nombre: ['', Validators.required],
    });

    this.steps = [
      {
        label: 'paso 1',
      },
      {
        label: 'paso 2',
      },
    ];
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  onSubmit(){
    if(this.proveedorForm.valid){
      
    }
  }
}
