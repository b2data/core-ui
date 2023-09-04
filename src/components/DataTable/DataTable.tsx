import { FC } from "react";
import {
  DataGridPremium,
  DataGridPremiumProps
} from "@mui/x-data-grid-premium";
export interface DataTableProps extends DataGridPremiumProps {}

export const DataTable: FC<DataTableProps> = (props) => {
  return <DataGridPremium {...props} />;
};
