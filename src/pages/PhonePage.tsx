import { DropDown } from '../components/DropDown/DropDown';

export const PhonesPage = () => {
  return (
    <div className="  w-full min-h-20 flex items-center justify-center ">
      <DropDown
        value="newest"
        label="Sort by"
        options={[
          { label: 'Newest', value: 'newest' },
          { label: 'Name', value: 'name' },
          { label: 'Price High to Low', value: 'high' },
          { label: 'Price Low to High', value: 'low' },
        ]}
        defaultValue="newest"
      />
    </div>
  );
};
