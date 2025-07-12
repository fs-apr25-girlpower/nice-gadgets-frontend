import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';

// const COLORS = [
//   { id: 'peach', value: '#FDDDC6' },
//   { id: 'green', value: '#556C6A' },
//   { id: 'gray', value: '#444443' },
//   { id: 'lightgray', value: '#F1F1F1' },
// ];
const colorKeys = [
  'black',
  'gold',
  'silver',
  'green',
  'yellow',
  'white',
  'purple',
  'red',
  'midnightgreen',
  'coral',
  'midnight',
  'spaceblack',
  'blue',
  'pink',
  'graphite',
  'sierrablue',
  'spacegray',
  'space gray',
  'space-gray',
  'rosegold',
  'rosegold',
  'rose-gold',
  'rose gold',
  'sky-blue',
  'skyblue',
  'sky blue',
  'starlight',
];

console.log(colorKeys);

export type ColorKey = (typeof colorKeys)[number];

export type ColorSelectorProps = {
  colors: ColorKey[];
  selectedColor: string;
  onSelectColor: React.Dispatch<React.SetStateAction<string>>;
  updateColorParam: (color: ColorKey) => void;
};

const appleColorsHex: Record<ColorKey, string> = {
  'black': '#000000',
  'rosegold': '#B76E79',
  'rose-gold': '#B76E79',
  'rose gold': '#B76E79',
  'gold': '#D6AB7A',
  'silver': '#C0C0C0',
  'spacegray': '#4B4B4B',
  'space gray': '#4B4B4B',
  'space-gray': '#4B4B4B',
  'green': '#ADE0C5',
  'yellow': '#FFFF00',
  'white': '#FFFFFF',
  'purple': '#BA95BA',
  'red': '#FF0000',
  'midnightgreen': '#004953',
  'coral': '#FF7F50',
  'midnight': '#191970',
  'spaceblack': '#1C1C1C',
  'blue': '#0000FF',
  'pink': '#FFC0CB',
  'graphite': '#383838',
  'sierrablue': '#5A9BD4',
  'starlight': '#F5F5DC',
  'sky-blue': '#87CEEB',
  'skyblue': '#87CEEB',
  'sky blue': '#87CEEB',
};

export const ColorSelector = ({
  colors,
  selectedColor,
  onSelectColor,
  updateColorParam,
}: ColorSelectorProps) => {
  //   const [selectedColor, setSelectedColor] = useState('peach');
  return (
    <div>
      <RadioGroup.Root
        className="flex gap-4"
        value={selectedColor}
        onValueChange={value => {
          onSelectColor(value);
          updateColorParam(value);
        }}
        aria-label="Available colors"
      >
        {colors.map(color => (
          <RadioGroup.Item
            key={color}
            value={color}
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
              //   style={{ backgroundColor: color }}
              style={{ backgroundColor: appleColorsHex[color] }}
            />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
