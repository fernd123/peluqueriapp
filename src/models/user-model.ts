export class User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    genre: string;
    isCustomer: boolean = false;
    isAdmin: boolean = false;
    isEmployee: boolean = false;
    isActive: boolean = true;
    password: string;

}