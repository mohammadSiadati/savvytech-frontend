'use client';

import { FC, useState } from 'react';
import Table from '@/components/Templates/Table/Table';
import Modal from '@/components/Organisms/Modal/Modal';
import { shoppingList, tableHeader } from '../../../../const';
import useOpenModal from '../../../../hook/useOpenModal';
import { ShoppingList } from '@/components/Templates/Table/interface';
import CreateItem from '@/components/Templates/CreateItem/CreateItem';
import EditItem from '@/components/Templates/EditItem/EditItem';

interface ItemForm {
  category: string;
  itemName: string;
  quantity: number;
}

const TaskManager: FC = () => {
  const [data, setData] = useState(shoppingList);
  const [selectedRow, setSelectedRow] = useState<ShoppingList | null>(null);

  // Delete modal
  const [isDeleteOpen, toggleDeleteModal] = useOpenModal();

  // Create modal
  const [isCreateOpen, toggleCreateModal] = useOpenModal();
  const [createForm, setCreateForm] = useState({
    category: '',
    itemName: '',
    quantity: 0,
  });

  // Edit modal
  const [isEditOpen, toggleEditModal] = useOpenModal();
  const [editForm, setEditForm] = useState<ItemForm>({
    category: '',
    itemName: '',
    quantity: 0,
  });

  // Handlers
  const handleDeleteRow = () => {
    setData((prev) => prev.filter((item) => item.id !== selectedRow?.id));
    toggleDeleteModal();
  };

  const handleEditRow = () => {
    setData((prev) =>
      prev.map((item) =>
        item.id === selectedRow?.id
          ? {
              ...item,
              name: editForm.itemName,
              category: editForm.category,
              quantity: editForm.quantity,
            }
          : item
      )
    );
    toggleEditModal();
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      category: createForm.category,
      name: createForm.itemName,
      quantity: createForm.quantity,
    };
    setData((prev) => [...prev, newItem]);
    toggleCreateModal();
    setCreateForm({ category: '', itemName: '', quantity: 0 });
  };

  return (
    <>
      <Table
        setRowData={setSelectedRow}
        tableHeader={tableHeader}
        shoppingList={data}
        onEdit={(row) => {
          setSelectedRow(row);
          setEditForm({
            category: row.category || '',
            itemName: row.name || '',
            quantity: row.quantity || 0,
          });
          toggleEditModal();
        }}
        onDelete={() => toggleDeleteModal()}
        onCreate={() => toggleCreateModal()}
      />

      {isDeleteOpen && (
        <Modal
          onClick={handleDeleteRow}
          label="Delete"
          title="Delete Row"
          onCancel={toggleDeleteModal}
          desc="Would you like to delete this row?"
        />
      )}

      {isEditOpen && (
        <EditItem
          handleEditRow={handleEditRow}
          toggleEditModal={() => {
            toggleEditModal();
          }}
          editForm={editForm}
          setEditForm={setEditForm}
        />
      )}

      {isCreateOpen && (
        <CreateItem
          handleAddItem={handleAddItem}
          toggleCreateModal={toggleCreateModal}
          createForm={createForm}
          setCreateForm={setCreateForm}
        />
      )}
    </>
  );
};

export default TaskManager;
