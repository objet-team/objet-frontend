import { List } from './DropDown.style';

interface DropDownProps {
  value: string;
  isOpen: boolean;
  setDesignTypeIdentify: any;
  setIsOpen: any;
}
export const DropDown = ({
  value,
  setDesignTypeIdentify,
  setIsOpen,
  isOpen,
}: DropDownProps) => {
  const ValueClick = () => {
    setDesignTypeIdentify(value);
    setIsOpen(!isOpen);
  };
  return (
    <div onClick={ValueClick}>
      <List>{value}</List>
    </div>
  );
};
