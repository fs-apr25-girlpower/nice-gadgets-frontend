import React, { useState } from 'react';
import clsx from 'clsx';

const capacityOptions = [
  { id: '64', label: '64GB' },
  { id: '256', label: '256GB' },
  { id: '512', label: '512GB' },
];

export const CapacitySelector: React.FC = () => {
  const [selected, setSelected] = useState('64');

  return (
    <div className="flex gap-2">
      {capacityOptions.map(({ id, label }) => {
        const isSelected = selected === id;

        return (
          <label
            key={id}
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
              value={id}
              checked={isSelected}
              onChange={() => setSelected(id)}
              className="sr-only"
            />
            <span className="block">{label}</span>
          </label>
        );
      })}
    </div>
  );
};
