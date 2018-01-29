export class Order {
    public personal: any;
    public passport: any;
    public quantity: any;
    public return: any;
    public receive: any;
    public destination: any;
    public promotion: any;

    public constructor(personal: any, passport: any, quantity: any, destination: any, receive: any, return1: any, promotion: any) {
        this.personal = personal;
        this.passport = passport;
        this.quantity = quantity;
        this.destination = destination;
        this.receive = receive;
        this.return = return1;
        this.promotion = promotion;
    }

}
