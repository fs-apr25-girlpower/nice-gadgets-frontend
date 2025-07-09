import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DropdownArrowDown } from '../../images/icons/DropdownArrowDown';
import { DropdownArrowUp } from '../../images/icons/DropdownArrowUp';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import clsx from 'clsx';

type DropDownProps = {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  defaultValue?: string; // початковий валюе
  className?: string; // для обгортки всього дропдауну
  triggerButtonClassName?: string; // для кнопки тригера
  dropdownMenuClassName?: string; // для меню зі списком опцій
  itemClassName?: string; //   для ітема
};

export const DropDown = ({
  options,
  label = 'Select',
  defaultValue,
  className,
  triggerButtonClassName,
  dropdownMenuClassName,
  itemClassName,
}: DropDownProps) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.value,
  );
  const [dropDownIsOpened, setDropDownIsOpened] = useState(false);

  const selectedLabel =
    options.find(opt => opt.value === selectedValue)?.label || '';

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setDropDownIsOpened(false);
    // onChange?.(value);
  };

  const baseWrapper =
    'dropdown-wrapper flex flex-col items-start justify-center text-start h-15 mobile:w-34 tablet:w-44';
  const baseLabel = 'block text-[12px] leading-[12px] text-[#89939A] mb-1';
  const baseTriggerBtn =
    'w-full h-10 px-3 bg-white border-1 border-[#B4BDC3] hover:border hover:border-[#313237] flex items-center justify-between text-left focus:outline-none';
  const baseDropdownContent =
    'bg-white shadow-lg border border-[#B4BDC3] z-50 overflow-hidden mobile:w-34 tablet:w-44 text-2';
  const baseDropdownItem =
    'px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer outline-none w-full hover:text-[#313237] text-[#89939A]';
  const activeDropdownItem = 'bg-gray-100 text-[#313237]';

  return (
    <div className={clsx(baseWrapper, className)}>
      <p className={baseLabel}>{label}</p>
      <AnimatePresence>
        <DropdownMenu.Root
          open={dropDownIsOpened}
          onOpenChange={setDropDownIsOpened}
          modal={false}
        >
          <DropdownMenu.Trigger asChild>
            <button className={clsx(baseTriggerBtn, triggerButtonClassName)}>
              <span className="text-[14px]">{selectedLabel}</span>
              {dropDownIsOpened ? <DropdownArrowUp /> : <DropdownArrowDown />}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className={clsx(baseDropdownContent, dropdownMenuClassName)}
              sideOffset={2}
              align="start"
              side="bottom"
              style={{
                width: 'var(--radix-dropdown-menu-trigger-width)',
                maxHeight: '240px',
                overflowY: 'auto',
              }}
              onCloseAutoFocus={e => e.preventDefault()}
            >
              {dropDownIsOpened &&
                options.map(({ label, value }) => {
                  const isSelected = selectedValue === value;

                  const itemClasses = clsx(
                    baseDropdownItem,
                    itemClassName,
                    isSelected && activeDropdownItem,
                  );

                  return (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <DropdownMenu.Item
                        className={itemClasses}
                        onSelect={() => handleSelect(value)}
                      >
                        {label}
                      </DropdownMenu.Item>
                    </motion.div>
                  );
                })}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </AnimatePresence>
    </div>
  );
};
