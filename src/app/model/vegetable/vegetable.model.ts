export class Vegetable {

    crop_name: string;
    eng_name: string;
    local_name: string;
    quantity: number;
    crop_id: number;
    crop_type_id: number;
    photo: string;
    scientific_name: string;
    major_nutrient: string;

    constructor(
        crop_name: string,
        eng_name: string,
        local_name: string,
        quantity: number,
        crop_id: number,
        crop_type_id: number,
        photo: string,
        scientific_name: string,
        major_nutrient: string
    ) {
        this.crop_name = crop_name;
        this.eng_name = eng_name;
        this.local_name = local_name;
        this.quantity = quantity;
        this.crop_id = crop_id;
        this.crop_type_id = crop_type_id;
        this.photo = photo;
        this.scientific_name = scientific_name;
        this.major_nutrient = major_nutrient;
    }
}
