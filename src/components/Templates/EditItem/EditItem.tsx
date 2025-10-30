import Input from '@/components/atoms/Input/Input';
import Modal from '@/components/Organisms/Modal/Modal';
import { FC } from 'react';
import IEditItemProps from './interface';

const EditItem: FC<IEditItemProps> = ({
  handleEditRow,
  toggleEditModal,
  editForm,
  setEditForm,
}) => {
  const isInvalid =
    !editForm.category || !editForm.itemName || !editForm.quantity;
  return (
    <Modal
      onClick={handleEditRow}
      label="Save"
      title="Edit Row"
      disabled={isInvalid}
      onCancel={toggleEditModal}
      desc="Update the details for this item."
    >
      <Input
        label="Category"
        value={editForm.category}
        onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
        required
      />
      <Input
        label="Item Name"
        value={editForm.itemName}
        onChange={(e) => setEditForm({ ...editForm, itemName: e.target.value })}
        required
      />
      <Input
        label="Quantity"
        type="number"
        value={editForm.quantity}
        onChange={(e) =>
          setEditForm({ ...editForm, quantity: Number(e.target.value) })
        }
        required
      />
    </Modal>
  );
};

export default EditItem;
