export class ProductionHouse {
    id: number;
    name: string;
    address: string;
    branch: string;
    branch_code: string;
    phone_number: string;
    email: string;
    head_office: string;

    constructor(id: number, name: string, address: string, branch: string, branch_code: string,
        phone_number: string, email: string, head_office: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.branch = branch;
        this.branch_code = branch_code;
        this.phone_number = phone_number;
        this.email = email;
        this.head_office = head_office;
    }
}
