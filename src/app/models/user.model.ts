export class User {
    RoleName: string;
    constructor(
        public Name: string,
        public Phone: string,
        public Role: Role,
        public FormId: string,
        public Email: string
    ) { }
}

export enum Role { PortalAdmin, PortalManager, RegisteredUser }
