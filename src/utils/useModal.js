import { useState } from "react";

const useModal = () => {
  const [isRegister, setIsRegister] = useState(false);

  function toggle() {
    setIsRegister(!isRegister);
  }

  function falseRegister() {
    setIsRegister(false);
  }

  return {
    isRegister,
    toggle,
    falseRegister
  };
};

export default useModal;
