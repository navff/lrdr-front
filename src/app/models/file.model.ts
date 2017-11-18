export class File {
  Id: number;
  Created: any;
  Code: string;
    constructor(
      public Name: string,
      public Extension: string,
      public Data: string,
      public FormId?: string,
      public LinkedObjectId?: number,
      public LinkedObjectType?: LinkedObjectType
    ) { }
  }

export enum LinkedObjectType {User, Comment, TempForm = 10}
