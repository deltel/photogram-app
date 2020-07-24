import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    location: '',
    biography: ''
  }
  profile_photo: File = null;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    let formData = new FormData();
    formData.append('profile_photo', this.profile_photo);
    formData.append('user', new Blob([JSON.stringify(this.user)],
                            {
                              type: "application/json"
                            }));
    this.userService.registerUser(formData).subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  onFileSelected(event) {
    this.profile_photo  = event.target.files[0];
  }

}
