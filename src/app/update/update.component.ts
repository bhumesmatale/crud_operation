import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert: boolean = false
  updateform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private contactservice: ContactService) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params.id)
    this.contactservice.getcontact(this.router.snapshot.params.id).subscribe((result) => {
      console.warn(result)
      this.updateform = new FormGroup({
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        phone: new FormControl(result['phone'])
      })
    })
  }
  collection() {
    console.warn("item", this.updateform.value)
    this.contactservice.update(this.router.snapshot.params.id, this.updateform.value).subscribe((result) => {
      console.warn("result", result)
      this.alert = true
    })
    this.updateform.reset({})
  }
  closeAlert() {
    this.alert = false
  }
}
