import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  collection: any = [];
  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
    this.contactservice.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
      console.log( this.collection);
    })
  }
  deletecontact(item) {
    console.warn(this.collection)
    this.collection.splice(item - 1, 1)
    this.contactservice.delete(item).subscribe((result) => {
      console.warn(result)
    })
  }
}

