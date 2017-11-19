import { User } from './user.model';
export class Order {
    Id: number;
    Code: string;
    Price: number;
    Status: OrderStatus;
    DeliveryAddress: string;
    ShowPayment: boolean;
    IsDeleted: boolean;
    CustomerEmail: string;
    ContractorUser: User;
    CustomerUser: User;
    Created: string;
    constructor(
        public ContractorUserId?: number,
        public Name?: string,
        public Deadline?: string,
        public CustomerUserId?: number,
        public isDeleted?: boolean
    ) { }
}

export enum OrderStatus { Created, Checked, Payed, Cancelled, Done }

export enum OrderSorting { Updated, Created, Deadline, Contractor, Customer }
