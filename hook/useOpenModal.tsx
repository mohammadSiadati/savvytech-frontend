import { useState } from 'react';

const useOpenModal = (init: boolean = false): [boolean, () => void] => {
  const [open, setOpen] = useState(init);

  const handleModal = () => setOpen((c) => !c);

  return [open, handleModal];
};

export default useOpenModal;
