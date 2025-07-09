import { DropDown } from '../components/DropDown/DropDown';
export const AccessoriesPage = () => {
  return (
    <div className="  w-full min-h-20 flex items-center justify-center ">
      <DropDown
        value="початковий велью сюди"
        label="Якийсь лейбл"
        options={[
          { label: 'шось', value: 'type' },
          { label: 'шось2', value: 'color' },
          { label: 'шось3', value: 'size' },
          { label: 'шось 4', value: 'mood' },
        ]}
        defaultValue="type"
        className="" // для обгортки
        triggerButtonClassName="" // для кнопки
        dropdownMenuClassName="" // для меню опцій
        itemClassName=""
      />
    </div>
  );
};
