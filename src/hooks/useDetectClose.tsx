import { useState, useEffect } from 'react';

const useDetectClose = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  initialState: boolean,
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    // 유니온 타입으로 문제 해결
    const pageClickEvent = (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;
