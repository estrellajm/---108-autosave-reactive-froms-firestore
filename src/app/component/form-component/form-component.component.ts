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
  @Input() company: string;
  myForm: FormGroup;
  myDoc;
  state: string;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  ngOnInit() {
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
