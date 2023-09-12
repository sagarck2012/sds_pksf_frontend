export class Sticker {
    id: number;
    processing_id: string;
    sticker_qr_code: string;
    sticker_bar_code: string;
    shipping_id: string;
    status: string;
    bar_code_base64: string;
    qr_code_base64: string;
    process_crating_master: string;
    packaging_date: string;
    net_weight: number;
    name_en: string;
    message: string;

    constructor(id: number,
        processing_id: string,
        sticker_qr_code: string,
        sticker_bar_code: string,
        shipping_id: string,
        status: string,
        bar_code_base64: string,
        qr_code_base64: string,
        process_crating_master: string,
        packaging_date: string,
        net_weight: number,
        name_en: string,
        message: string
        ) {
            this.id = id;
            this.processing_id = processing_id;
            this.sticker_qr_code = sticker_qr_code;
            this.sticker_bar_code = sticker_bar_code;
            this.shipping_id = shipping_id;
            this.status = status;
            this.bar_code_base64 = bar_code_base64;
            this.qr_code_base64 = qr_code_base64;
            this.process_crating_master = process_crating_master;
            this.packaging_date = packaging_date;
            this.net_weight = net_weight;
            this.name_en = name_en;
            this.message = message;
    }
    

}
