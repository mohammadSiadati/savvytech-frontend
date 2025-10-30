type CreateItemForm = {
  category: string;
  itemName: string;
  quantity: number;
};

export default interface IEditItemProps {
  handleEditRow: () => void;
  toggleEditModal: () => void;
  editForm: CreateItemForm;
  setEditForm: React.Dispatch<React.SetStateAction<CreateItemForm>>;
}
