export class Harvesting {
    id: number;
    crop_id: number;
    start_date: string;
    end_date: string;
    created_at: string;
    quantity: number;

    constructor(id: number, crop_id: number, start_date: string, end_date: string, created_at: string, quantity: number) {
        this.id = id;
        this.crop_id = crop_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.created_at = created_at;
        this.quantity = quantity;
    }
}
