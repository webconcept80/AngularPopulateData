import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addresses = [];
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe((address) => {
      this.addresses = address;
    });
  }
}
