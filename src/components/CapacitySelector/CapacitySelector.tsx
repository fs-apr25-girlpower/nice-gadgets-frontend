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
              'w-[56px] h-[32px]',
              'flex flex-col items-center justify-center',
              'cursor-pointer select-none',
              'border text-default',
              'transition-colors',
              isSelected
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-primary border-elements hover:border-secondary',
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
