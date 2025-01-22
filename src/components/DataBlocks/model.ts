// import { SxProps } from "@mui/material";
// import { ReactNode, UIEventHandler } from "react";

// import { DataBlockAction } from "./store";

// export enum DataBlockType {
//   Paragraph = "paragraph",
//   Header = "header",
// }

// export type DataBlockAlign = "left" | "right" | "center" | "justify";

// export type DataBlockTranslations = {
//   addBtnTooltip: string | ReactNode;
//   moreBtnTooltip: string | ReactNode;
//   showVariantsTooltip: string | ReactNode;
//   closeVariantsTooltip: string | ReactNode;
//   addVariantTooltip: string | ReactNode;
//   deleteVariantTooltip: string | ReactNode;
//   swapCurrentVariantTooltip: string | ReactNode;
//   emptyPlaceholder: string;
//   filterPlaceholder: string;
//   noResults: string;
//   blocks: Record<DataBlockType, string>;
//   indent: {
//     increase: string;
//     decrease: string;
//   };
//   deleteBlock: {
//     default: string;
//     clickToDelete: string;
//   };
//   align: {
//     title: string;
//     left: string;
//     right: string;
//     center: string;
//     justify: string;
//   };
// };

// type UserData = {
//   id: string;
//   avatar?: string;
//   lastName?: string;
//   firstName: string;
//   middleName?: string;
// };

// export type DataBlockVariant<Data = Record<string, any>> = {
//   id: string;
//   data: Data;
//   isCurrent: boolean;
//   createdBy?: string;
//   createdByData?: UserData;
//   votes: {
//     createdBy?: string;
//     createdByData?: UserData;
//     createdAt: Date;
//   }[];
// };

// type DataBlockBase<T = DataBlockType, Data = Record<string, any>> = {
//   id: string;
//   type: T | string;
//   offset: number;
//   number: number;
//   isTemplate?: boolean;
//   createdBy?: string;
//   createdByData?: UserData;
//   variants: DataBlockVariant<Data>[];
// };

// export type DataBlockHeader = DataBlockBase<
//   DataBlockType.Header,
//   {
//     text?: string;
//     tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
//     align?: DataBlockAlign;
//   }
// >;

// export type DataBlockParagraph = DataBlockBase<
//   DataBlockType.Paragraph,
//   {
//     text?: string;
//     align?: DataBlockAlign;
//   }
// >;

// export type DataBlockModel = DataBlockHeader | DataBlockParagraph;

// type onChangeCallback = (
//   action: DataBlockAction,
//   data: {
//     block?: Omit<DataBlockModel, "variants">;
//     variant?: Omit<DataBlockVariant, "votes">;
//     index?: number;
//     oldIndex?: number;
//     targetIndex?: number;
//   },
// ) => void;

// export type DataBlockState = {
//   editable: boolean;
//   showPrefix: boolean;
//   showVariants?: boolean;
//   canChangeVariants?: boolean;
//   currentUserId?: string;
//   getFilesUrl: (id: string) => string;
//   types: DataBlockType[];
//   i18n: DataBlockTranslations;
//   prefixes: Record<string, string>;
//   blocks: DataBlockModel[];
//   maxPrefixLength: number;
//   focused?: number;
//   onChange?: onChangeCallback;
// };

// export interface DataBlockRef {
//   setFocused: (index?: number) => void;
//   getState: () => DataBlockState;
// }

// export { DataBlockAction };
