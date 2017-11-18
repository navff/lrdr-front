import { Order } from './order.model';
export class Payment {
    Id: number;
    Order: Order;
    constructor(
        public OrderId: number,
        public Time: any,
        public Sum: string,
        public ExternalId?: string,
        public ExternalUserId?: string,
        public Description?: string,
        public IsDeleted?: boolean,
        public PaymentType?: PaymentType
    ) { }
}

export enum PaymentType { ForSystemUsing, ForUserOrder }

export enum PaymentSearchType {SystemUser, OwnerUser, CustomerUser, Order, All};