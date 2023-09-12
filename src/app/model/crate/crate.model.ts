export class Crate {
    crate_no: string;
    net_volume: number;
    production_house: number;
    user_id: number;
    bar_code: string;
    status: string;
    registration_datetime: string;
    total_no_of_package: number;

    constructor(crate_no: string, net_volume: number, production_house: number, user_id: number,
        bar_code: string, status: string, registration_datetime: string, total_no_of_package: number) {
        this.crate_no = crate_no;
        this.net_volume = net_volume;
        this.production_house = production_house;
        this.user_id = user_id;
        this.bar_code = bar_code;
        this.status = status;
        this.registration_datetime = registration_datetime;
        this.total_no_of_package = total_no_of_package;
    }
}
