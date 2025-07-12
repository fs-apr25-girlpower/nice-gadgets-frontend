// import { useState } from 'react';
import clsx from 'clsx';

// const capacityOptions = [
//   { id: '64', label: '64GB' },
//   { id: '256', label: '256GB' },
//   { id: '512', label: '512GB' },
// ];
// export type capacityOption = {
//     id: string;
//     label: string;
// }

export type CapacitySelectorProps = {
  availableCapacities: string[];
  selectedCapacity: string;
  onSelectCapacity: React.Dispatch<React.SetStateAction<string>>;
};

export const CapacitySelector = ({
  availableCapacities,
  selectedCapacity,
  onSelectCapacity,
}: CapacitySelectorProps) => {
  // const capacityOptions: capacityOption[] = availableCapacities.reduce<capacityOption[]>((acc, val) => {
  //     const match: string[] | null = val.match(/\d+/g);
  //     const id = match ? parseInt(match[0], 10) : 0;

  //     acc.push({
  //         id: String(id),
  //         label: val,
  //     })
  //     return acc;
  // }, [])

  //   const [selected, setSelected] = useState('64');

  return (
    <div className="flex gap-2">
      {availableCapacities.map(capacity => {
        const isSelected = selectedCapacity === capacity;

        return (
          <label
            key={capacity}
            className={clsx(
              'w-[56px] h-[32px] flex flex-col items-center justify-center cursor-pointer select-none border text-sm font-medium transition-colors',
              isSelected
                ? 'bg-[#313237] text-white border-[#313237]'
                : 'bg-white text-[#313237] border-gray-300 hover:border-gray-500',
            )}
          >
            <input
              type="radio"
              name="capacity"
              value={capacity}
              checked={isSelected}
              onChange={e => onSelectCapacity(e.target.value)}
              className="sr-only"
            />
            <span className="block">{capacity}</span>
          </label>
        );
      })}
    </div>
  );
};
