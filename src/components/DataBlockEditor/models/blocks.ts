export type DataBlockType = "header" | "text" | string;

export type DataBlockUserData = {
  id: string;
  avatar?: string;
  lastName?: string;
  firstName: string;
  middleName?: string;
};

export type DataBlockVariant<Data = Record<string, any>> = {
  id: string;
  data: Data;
  isCurrent: boolean;
  createdBy?: string;
  createdByData?: DataBlockUserData;
  votes: {
    createdBy?: string;
    createdByData?: DataBlockUserData;
    createdAt: Date;
  }[];
};

export type DataBlockBase<T = DataBlockType, Data = Record<string, any>> = {
  id: string;
  type: T;
  offset: number;
  hidePrefix?: boolean;
  createdBy?: string;
  createdByData?: DataBlockUserData;
  variants: DataBlockVariant<Data>[];
};
