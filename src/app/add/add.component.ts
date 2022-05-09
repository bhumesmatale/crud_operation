import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  })
  get firstName() { return this.addform.get('firstName') }
  get lastName() { return this.addform.get('lastName') }
  get phone() { return this.addform.get('phone') }
  constructor(private contactservice: ContactService) { }
  alert: boolean = false
  f: any;
  isShow: boolean = false;
  ngOnInit(): void {
  }
  addList() {
    console.warn(this.addform.value)
    this.contactservice.save(this.addform.value).subscribe((result) => {
      this.alert = true
    })
    this.addform.reset({})
  }
  closeAlert() {
    this.alert = false
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }
}
