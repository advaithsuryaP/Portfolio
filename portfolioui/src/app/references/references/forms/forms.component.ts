import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['chris', 'anna'];
  isSubmitted = false;
  referenceForm: FormGroup;
  constructor() {
    this.referenceForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.checkUsernameValidity.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  checkUsernameValidity(control: FormControl): { [s: string]: boolean } | null {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) return { 'nameIsForbidden': true }
    return null;
  }

  checkEmailValidity(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') resolve({ 'emailisForbidden': true });
        else resolve(null); 
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    this.isSubmitted = true;
  }

}
