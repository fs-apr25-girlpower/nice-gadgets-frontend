import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import { useState } from 'react';

const COLORS = [
  { id: 'peach', value: '#FDDDC6' },
  { id: 'green', value: '#556C6A' },
  { id: 'gray', value: '#444443' },
  { id: 'lightgray', value: '#F1F1F1' },
];

export const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('peach');

  return (
    <div>
      <RadioGroup.Root
        className="flex gap-4"
        value={selectedColor}
        onValueChange={setSelectedColor}
        aria-label="Available colors"
      >
        {COLORS.map(color => (
          <RadioGroup.Item
            key={color.id}
            value={color.id}
            className={clsx(
              'w-7 h-7 rounded-full bg-white',
              'flex items-center justify-center',
              'transition-all duration-200',
              'outline-none cursor-pointer',
              'border',
              'data-[state=checked]:border-black',
              'data-[state=unchecked]:border-[#E3E5E5]',
            )}
          >
            <div
              className="w-[22px] h-[22px] rounded-full"
              style={{ backgroundColor: color.value }}
            />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
