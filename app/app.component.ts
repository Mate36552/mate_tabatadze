import { Component } from '@angular/core';



@Component({
  selector: 'app-standalone',
  template: `<h2>Standalone Component</h2>`,
  standalone: true,
})
export class StandaloneComponent {}

interface ParentUser {
  id: number;
  firstname: string;
  lastname: string;
  dateOfBirth: string;  // You can also use Date type if preferred
  phoneNumber: string;
  email: string;
}


interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User List';
  users: ParentUser[] = [
    { id: 1, firstname: 'Alice', lastname: 'Smith', dateOfBirth: '2001-05-14', phoneNumber: '123-456-7890', email: 'alice@example.com' },
    { id: 2, firstname: 'Bob', lastname: 'Johnson', dateOfBirth: '2004-07-22', phoneNumber: '123-456-7891', email: 'bob@example.com' },
    { id: 3, firstname: 'Charlie', lastname: 'Brown', dateOfBirth: '1998-11-30', phoneNumber: '123-456-7892', email: 'charlie@example.com' },
    { id: 4, firstname: 'David', lastname: 'Wilson', dateOfBirth: '2005-01-15', phoneNumber: '123-456-7893', email: 'david@example.com' },
    { id: 5, firstname: 'Eva', lastname: 'Davis', dateOfBirth: '1995-09-05', phoneNumber: '123-456-7894', email: 'eva@example.com' }
  ];

  // Filter users over 20
  get filteredUsers() {
    const currentDate = new Date();
    return this.users.filter(user => {
      const birthDate = new Date(user.dateOfBirth);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age <= 20;
    });
  }
  
  users1: User[] = [
    { firstname: 'Alice', lastname: 'Smith', age: 22 },
    { firstname: 'Bob', lastname: 'Johnson', age: 19 },
    { firstname: 'Charlie', lastname: 'Brown', age: 25 },
    { firstname: 'David', lastname: 'Wilson', age: 18 },
    { firstname: 'Eva', lastname: 'Davis', age: 30 }
  ];

  
}
