import { TableHTMLAttributes } from 'react';

export type ShoppingList = {
  id: number;
  category: string;
  name: string;
  quantity: number;
};

export type TableHeader = {
  key: string | number;
  label: string;
  className?: string;
};

export default interface ITableProps
  extends TableHTMLAttributes<HTMLTableElement> {
  tableHeader: TableHeader[];
  shoppingList: ShoppingList[];
  onEdit: (row: ShoppingList) => void;
  onDelete: () => void;
  onCreate: () => void;
  setRowData: (row: ShoppingList) => void;
}
