'use client';
import { FC } from 'react';
import Button from '@/components/atoms/Button/Button';
import ITableProps from './interaface';

const Table: FC<ITableProps> = ({
  tableHeader,
  shoppingList,
  onDelete,
  onEdit,
  onCreate,
  setRowData,
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
          <tr>
            {tableHeader.map((header) => (
              <th key={header.key} scope="col" className="px-6 py-3">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {shoppingList.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              {tableHeader.map((header) => (
                <td key={header.key} className="px-6 py-4">
                  {header.key === 'actions' ? (
                    <div className="flex gap-2">
                      <Button
                        label="Edit"
                        onClick={() => {
                          onEdit(row);
                          setRowData(row);
                        }}
                      />
                      <Button
                        label="Delete"
                        onClick={() => {
                          onDelete();
                          setRowData(row);
                        }}
                      />
                      <Button label="Add" onClick={() => onCreate()} />
                    </div>
                  ) : (
                    String(row[header.key as keyof typeof row] ?? '')
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
