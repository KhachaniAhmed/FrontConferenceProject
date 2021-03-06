import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/modules/user/user.module';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new UserModule(0, "", "", "");
  test: boolean = false;

  constructor(private accountService: AccountService, private route: Router) { }

  ngOnInit() {
  }
  register() {
    console.log(this.user.repassword)
    if (this.user.password == this.user.repassword) {
      this.accountService.register(this.user).subscribe(e => {
        console.log(e)
        this.test = false;
        this.route.navigate(["/login"]);
      });
    } else {
      this.test = true;
    }
  }
}
