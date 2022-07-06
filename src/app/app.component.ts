import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'myformly',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tab: number = 1;
  nu: number = 1;
  form = new FormGroup({});
  form2 = new FormGroup({});
  model = {};
  model2 = {};
  fields2: FormlyFieldConfig[] = [];
  fields: FormlyFieldConfig[] = [    {
    key: 'Date',
    type: 'radio',
    templateOptions: {
      label: 'key',
      placeholder: 'Input placeholder',
      required: false,
    },
  },
    {
      key: 'key',
      type: 'input',
      defaultValue: 'laclef',
      templateOptions: {
        label: 'key',
        placeholder: 'Input placeholder',
        required: false,
      },
    },
    {
      key: 'label',
      type: 'input',
      defaultValue: 'laclef',
      templateOptions: {
        label: 'le label',
        placeholder: 'Input placeholder',
        required: false,
      },
    },
    {
      key: 'type',
      type: 'select',
      defaultValue: 'input',
      templateOptions: {
        label: "Choisir le type d'input",
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'select', value: 'select' },
          { label: 'input', value: 'input' },
          { label: 'textarea', value: 'textarea' },
          { label: 'datepicker', value: 'datepicker' },
          { label: 'checkbox', value: 'checkbox' },
          { label: 'toggle', value: 'toggle' },
          { label: 'radio', value: 'radio' },
          //{ label: 'datepicker', value: 'datepicker' },
        ],
      },
    },
    {
      key: 'placeholder',
      type: 'textarea',
      defaultValue: 'This is a default value',
      templateOptions: {
        label: 'Place holder',
        placeholder: 'Textarea placeholder',
        required: true,
      },
    },
    {
      key: 'required',
      type: 'checkbox',
      templateOptions: {
        label: 'Champs obligatoire ?',
      },
    },
  ];

  onSubmit() {
    // if (this.form.valid) {
    //   alert(JSON.stringify(this.model, null, 2));
    // }
    this.nu += 1;
    let x: MyField = {
      id: 'MyfieldId' + this.nu,
      key: this.model['key'],
      type: this.model['type'],
      templateOptions: {
        label: this.model['label'],
        placeholder: this.model['placeholder'],
        required: false,
      },
    };

    // verifier que la clef n'est pas déjà utilisée

    this.fields2.push(x);
  }
  onSubmit2() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model2, null, 2));
    }
  }
}

interface MyField {
  key: string;
  type: string;
  templateOptions: any;
}
