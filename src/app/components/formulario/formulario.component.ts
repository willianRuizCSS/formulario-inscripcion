import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {MenuItem} from 'primeng/api'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  proveedorForm: FormGroup;
  steps: MenuItem[];
  currentStep = 0;

  constructor(private formBuilder: FormBuilder){
    this.proveedorForm = this.formBuilder.group({
      tipoProveedor:['',Validators.required],
      nomebre:['',Validators.required],
    });
  
    this.steps=[
      {
        label: 'paso 1',
      },
      {
        label: 'paso 2',
      },
      {
        label: 'paso 3',
      },
      {
        label: 'paso 4',
      },
      {
        label: 'paso 5',
      },
      {
        label: 'paso 6',
      },
      {
        label: 'paso 7',
      },
      {
        label: 'paso 8',
      },
      {
        label: 'paso 9',
      },
      {
        label: 'paso 10',
      },
      {
        label: 'paso 11',
      },
    ];
  }

    nextStep(){
      if (this.currentStep < this.steps.length-1) {
        this.currentStep ++ ;
      }
    }
    previousStep(){
      if (this.currentStep > 0) {
        this.currentStep -- ;
      }
    }

    onSubmit(){
      if(this.proveedorForm.valid){ 
      }
    }

  }

