import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {

  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]
  );
  dniControl = new FormControl(

    '', [Validators.required,
      Validators.minLength(8)
    ],
  )

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(3)] ],
      apellido: ['', [ Validators.required] ],
      email: this.emailControl,
      dni: ['', [ Validators.required, Validators.minLength(8)] ]
    });

    console.log(this.registerForm.get('nombre')?.value)
    console.log(this.emailControl.value);
  }

  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }


  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }



  onSubmit(): void {
    if (this.dniControl.valid && this.emailControl.valid) {
      alert('Formulario ingresado correctamente')
    } else {
      alert('El formulario no es valido');
    }
  }


}
