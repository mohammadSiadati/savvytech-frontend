import Table from '@/components/Templates/Table/Table';
import { shoppingList, tableHeader } from '../../../../const';
import { useEffect, useState } from 'react';
import { ShoppingList } from '@/components/Templates/Table/interaface';
import Modal from '@/components/Organisms/Modal/Modal';
import useOpenModal from '../../../../hook/useOpenModal';
import Input from '@/components/atoms/Input/Input';
import { create } from 'domain';

const TaskManajer = () => {
  const [data, setData] = useState(shoppingList);
  const [rowData, setRowData] = useState<ShoppingList | null>(null);
  const [daleteModal, handleDeleteModal] = useOpenModal();

  const [createModal, handleCreateModal] = useOpenModal();
  const [createItem, setCreateItem] = useState({
    category: '',
    ItemName: '',
    quantity: 0,
  });

  const [editModal, handleEditModal] = useOpenModal();
  const [editRow, setEditRow] = useState({
    category: rowData?.category || '',
    ItemName: rowData?.name || '',
    quantity: rowData?.quantity || 0,
  });

  useEffect(() => {
    if (rowData) {
      setEditRow({
        category: rowData.category,
        ItemName: rowData.name,
        quantity: rowData.quantity,
      });
    }
  }, [rowData]);

  function deleteRowHandler() {
    setData(() => data?.filter((item) => item.id !== rowData?.id));
    handleDeleteModal();
  }

  function handleRowEditModal() {
    setData((prev) =>
      prev.map((item) =>
        item.id === rowData?.id
          ? {
              ...item,
              name: editRow?.ItemName,
              category: editRow.category,
              quantity: editRow.quantity,
            }
          : item
      )
    );
    handleEditModal();
  }
  return (
    <>
      <Table
        setRowData={setRowData}
        tableHeader={tableHeader}
        shoppingList={data}
        onEdit={(row) => {
          handleEditModal();
          setRowData(row);
        }}
        onDelete={() => handleDeleteModal()}
        onCreate={() => handleCreateModal()}
      />
      {daleteModal && (
        <Modal
          onClick={deleteRowHandler}
          label="Delete"
          title={'delete row'}
          onCancel={handleDeleteModal}
          desc={'would you like to delete this row?'}
        />
      )}

      {editModal && (
        <Modal
          onClick={() => handleRowEditModal()}
          label="Edit"
          title="edit row"
          onCancel={handleEditModal}
          desc={'would you like to edit this row?'}
        >
          <Input
            label="Category"
            type="text"
            required
            value={editRow?.category}
            defaultValue={rowData?.category}
            onChange={(e) =>
              setEditRow({ ...editRow, category: e.target.value })
            }
          />
          <Input
            label="Item Name"
            type="text"
            defaultValue={rowData?.name}
            value={editRow?.ItemName}
            required
            onChange={(e) =>
              setEditRow({ ...editRow, ItemName: e.target.value })
            }
          />
          <Input
            label="Quantity"
            type="number"
            required
            value={editRow?.quantity}
            defaultValue={rowData?.quantity}
            onChange={(e) =>
              setEditRow({ ...editRow, quantity: Number(e.target.value) })
            }
          />
        </Modal>
      )}

      {createModal && (
        <Modal
          onClick={() => handleCreateModal()}
          label="Create"
          title="Create row"
          onCancel={handleEditModal}
          desc={'would you like to Create this row?'}
        >
          <Input
            label="Category"
            type="text"
            required
            value={createItem.category}
            onChange={(e) =>
              setEditRow({ ...editRow, category: e.target.value })
            }
          />
          <Input
            label="Item Name"
            type="text"
            value={createItem.ItemName}
            required
            onChange={(e) => setCreateItem({ ItemName: e.target.value })}
          />
          <Input
            label="Quantity"
            type="number"
            required
            value={createItem.quantity}
            onChange={(e) => setEditRow({ quantity: Number(e.target.value) })}
          />
        </Modal>
      )}
    </>
  );
};

export default TaskManajer;
