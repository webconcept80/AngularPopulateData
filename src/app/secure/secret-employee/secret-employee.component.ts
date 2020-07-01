import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-secret-employee',
  templateUrl: './secret-employee.component.html',
  styleUrls: ['./secret-employee.component.css'],
})
export class SecretEmployeeComponent implements OnInit {
  secretUsers: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getSecretUsers().subscribe((secretUser) => {
      this.secretUsers = secretUser;
    });
  }
}
