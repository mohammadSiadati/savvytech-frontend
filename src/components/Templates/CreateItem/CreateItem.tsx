import Input from '@/components/atoms/Input/Input';
import Modal from '@/components/Organisms/Modal/Modal';
import CreateItemProps from './interface';
import { FC } from 'react';

const CreateItem: FC<CreateItemProps> = ({
  handleAddItem,
  toggleCreateModal,
  createForm,
  setCreateForm,
}) => {
  const isInvalid =
    !createForm.category.trim() ||
    !createForm.itemName.trim() ||
    !createForm.quantity;
  return (
    <Modal
      onClick={handleAddItem}
      label="Create"
      disabled={isInvalid}
      title="Create Item"
      onCancel={toggleCreateModal}
      desc="Add a new item to your shopping list."
    >
      <Input
        label="Category"
        value={createForm.category}
        onChange={(e) =>
          setCreateForm({ ...createForm, category: e.target.value })
        }
        required
      />
      <Input
        label="Item Name"
        value={createForm.itemName}
        onChange={(e) =>
          setCreateForm({ ...createForm, itemName: e.target.value })
        }
        required
      />
      <Input
        label="Quantity"
        type="number"
        value={createForm.quantity}
        onChange={(e) =>
          setCreateForm({
            ...createForm,
            quantity: Number(e.target.value),
          })
        }
        required
      />
    </Modal>
  );
};

export default CreateItem;
