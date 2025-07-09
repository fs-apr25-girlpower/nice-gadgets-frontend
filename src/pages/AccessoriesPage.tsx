import { DropDown } from '../components/DropDown/DropDown';
export const AccessoriesPage = () => {
  return (
    <div className="  w-full min-h-20 flex items-center justify-center ">
      <DropDown
        value="16"
        label="Items on page"
        options={[
          { label: '16', value: '16' },
          { label: '24', value: '24' },
          { label: '32', value: '32' },
          { label: '64', value: '64' },
        ]}
        defaultValue="16"
        className="" // для обгортки
        triggerButtonClassName="max-w-[128px]" // для кнопки
        dropdownMenuClassName="" // для меню опцій
        itemClassName=""
      />
    </div>
  );
};
