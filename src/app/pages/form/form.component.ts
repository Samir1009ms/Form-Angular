import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private fb: FormBuilder, private DataService: DataService) { }
  submitted = false;

  addForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    age: ['', Validators.required],
    cins: ['', Validators.required],
    note: ['', Validators.required],
  });

  onSubmit() {
    if (this.addForm.valid) {
      // alert('Formunuz başarıyla gönderildi.');
      console.log(this.addForm.value);
      // @ts-ignore
      this.DataService.setData(this.addForm.value).subscribe((res) => {
        console.log(res);
      });
      this.addForm.reset();
    } else {
      this.submitted = true;
    }

  }
}
