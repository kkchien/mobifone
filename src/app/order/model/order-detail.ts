export class OrderDetail {
    public rent_day: number;
    public protection_fee: number;
    public rent_fee: number;
    public quantity: number;
    public total_fee: number;

    constructor(
        rent_day: number,
        protection_fee: number,
        rent_fee: number,
        quantity: number,
        total_fee: number) {
            this.rent_day = rent_day;
            this.protection_fee = protection_fee;
            this.quantity = quantity;
            this.rent_fee = rent_fee;
            this.total_fee = total_fee;
    }
}
