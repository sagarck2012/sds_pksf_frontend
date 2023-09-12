export class Shipment {
    id: number;
    shipping_code: string;
    total_no_of_crate: number;
    shipping_datetime: string;
    crating_info: string[];
    shipping_agent: string;
    shipping_contact: string;
    destination_contact: string;
    destination_address: string;
    status: string;

    constructor(
        id: number,
        shipping_code: string,
        total_no_of_crate: number,
        shipping_datetime: string,
        crating_info: string[],
        shipping_agent: string,
        shipping_contact: string,
        destination_contact: string,
        destination_address: string,
        status: string
    ) {
        this.id = id;
        this.shipping_code = shipping_code;
        this.total_no_of_crate = total_no_of_crate;
        this.shipping_datetime = shipping_datetime;
        this.crating_info = crating_info;
        this.shipping_agent = shipping_agent;
        this.shipping_contact = shipping_contact;
        this.destination_contact = destination_contact;
        this.destination_address = destination_address;
        this.status = status;
    }
}
