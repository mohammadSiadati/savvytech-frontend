'use client';

import { FC } from 'react';
import Button from '@/components/atoms/Button/Button';
import ITableProps from './interface';

const Table: FC<ITableProps> = ({
  tableHeader,
  shoppingList,
  onDelete,
  onEdit,
  onCreate,
  setRowData,
}) => {
  return (
    <div className="relative shadow-md sm:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Shopping List
        </h2>
        <Button label="New Item" onClick={onCreate} />
      </div>

      <div className="max-h-[400px] overflow-auto">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="sticky top-0 text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              {tableHeader.map(({ key, label }) => (
                <th
                  key={key}
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {shoppingList.length > 0 ? (
              shoppingList.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-200 dark:border-gray-700 odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {tableHeader.map(({ key }) => (
                    <td key={key} className="px-6 py-3 align-middle">
                      {key === 'actions' ? (
                        <div className="flex gap-2">
                          <Button
                            label="Edit"
                            onClick={() => {
                              setRowData(row);
                              onEdit(row);
                            }}
                          />
                          <Button
                            label="Delete"
                            onClick={() => {
                              setRowData(row);
                              onDelete();
                            }}
                          />
                        </div>
                      ) : (
                        String(row[key as keyof typeof row] ?? '')
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tableHeader.length}
                  className="text-center py-6 text-gray-400 dark:text-gray-500"
                >
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
