import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  @Input() form: string;
  @Input() path: string;
  @Input() state: string;
  myForm: FormGroup;
  myDoc;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit() {
    console.log(this.form);

    this.formInit();
    this.myDoc = this.afs.doc('contacts/test').valueChanges();
  }

  formInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      career: ['', Validators.required],
      bio: ['']
    });
  }

  changeHandler(e) {
    this.state = e;
  }
}
