export class Packaging {
    id: number;
    crop_type_local_name: string;
    eng_name: string;
    processing_id: string;
    processing_date: string;
    packaging_unit: string;
    packaging_unit_per_package: number;
    total_no_of_sticker: number;
    user_id: number;
    harvest_id_list: string;
    status: string;

    constructor(id: number, crop_type_local_name: string, eng_name: string, processing_id: string, processing_date: string, packaging_unit: string, packaging_unit_per_package: number, total_no_of_sticker: number,
        user_id: number, harvest_id_list: string, status: string) {
        this.id = id;
        this.crop_type_local_name = crop_type_local_name;
        this.eng_name = eng_name;
        this.packaging_unit = packaging_unit;
        this.processing_date = processing_date;
        this.packaging_unit_per_package = packaging_unit_per_package;
        this.total_no_of_sticker = total_no_of_sticker;
        this.user_id = user_id;
        this.harvest_id_list = harvest_id_list;
        this.processing_id = processing_id;
        this.status = status;
    }
}
