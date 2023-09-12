export class User {
    user_id: string;
    role_name: string;
    email: string;
    password: string;
    name: string;
    nid: string;
    phone_number: string;
    address: string;
    production_house: number;

    constructor(user_id: string, email: string, password: string, name: string, nid: string,
        phone_number: string, address: string, production_house: number, role_name: string) {
        this.user_id = user_id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.nid = nid;
        this.phone_number = phone_number;
        this.address = address;
        this.production_house = production_house;
        this.role_name = role_name;
    }

}
