export class CropType {
    crop_type_id: number;
    local_name: string;
    eng_name: string;
    scientific_name: string;
    major_nutrient: string;
    crop_category_id: number;
    crop_category: string;

    constructor(crop_type_id: number, local_name: string, eng_name: string, scientific_name: string,
        major_nutrient: string, crop_category_id: number, crop_category: string) {
        this.crop_type_id = crop_type_id;
        this.local_name = local_name;
        this.eng_name = eng_name;
        this.scientific_name = scientific_name;
        this.major_nutrient = major_nutrient;
        this.crop_category_id = crop_type_id;
        this.crop_category = crop_category;
    }

}
