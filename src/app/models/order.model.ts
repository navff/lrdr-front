import { User } from './user.model';
export class Order {
    Id: number;
    Code: string;
    Price: number;
    Status: OrderStatus;
    DeliveryAddress: string;
    ShowPayment: boolean;
    IsDeleted: boolean;
    OwnerUser: User;
    CustomerUser: User;
    constructor(
        public OwnerUserId: number,
        public Name: string,
        public Deadline: any,
        public CustomerUserId: number,
        public Created: any,
        public isDeleted: boolean
    ) { }
}

export enum OrderStatus { Created, Checked, Payed, Cancelled, Done }

export enum OrderSorting { Updated, Created, Deadline, Owner, Customer }
