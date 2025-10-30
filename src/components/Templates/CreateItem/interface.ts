type CreateItemForm = {
  category: string;
  itemName: string;
  quantity: number;
};

export default interface CreateItemProps {
  handleAddItem: () => void;
  toggleCreateModal: () => void;
  createForm: CreateItemForm;
  setCreateForm: React.Dispatch<React.SetStateAction<CreateItemForm>>;
}
