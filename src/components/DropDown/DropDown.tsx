import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DropdownArrowDown } from '../../images/icons/DropdownArrowDown';
import { DropdownArrowUp } from '../../images/icons/DropdownArrowUp';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const DEFAULT_DROPDOWN_VALUE = 'Newest';

const DROPDOWN_OPTIONS = {
  NEWEST: 'Newest',
  NAME: 'Name',
  PRICE_HIGH_TO_LOW: 'High to Low',
  PRICE_LOW_TO_HIGH: 'Low to High',
  DATE: 'Date',
};

export const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_DROPDOWN_VALUE);
  const [dropDownIsOpened, setDropDownIsOpened] = useState(false);

  const wrapperClassnames =
    'dropdown-wrapper flex flex-col items-start justify-center text-start h-15 mobile:w-34   tablet:w-44  ';
  const labelClassnames =
    'block text-[12px] leading-[12px] text-[#89939A] mb-1';
  const triggerButtonClassnames =
    'w-full h-10 px-3  bg-white border-1 border-[#B4BDC3]    hover:border  hover:border-[#313237] flex items-center justify-between text-left focus:outline-none ';
  const triggerTextClassnames = '';
  const dropdownContentClassnames =
    '  bg-white shadow-lg border border-[#B4BDC3] z-50 overflow-hidden mobile:w-34 tablet:w-44';
  const dropdownItemClassnames =
    ' px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer outline-none w-full';
  const customStyles = {
    content: {
      width: 'var(--radix-dropdown-menu-trigger-width)',
      maxHeight: '240px',
      overflowY: 'auto',
    },
  };

  return (
    <div className={wrapperClassnames}>
      <p className={labelClassnames}>Sort by</p>
      <AnimatePresence>
        <DropdownMenu.Root
          open={dropDownIsOpened}
          onOpenChange={setDropDownIsOpened}
          modal={false}
        >
          <DropdownMenu.Trigger asChild>
            <button className={triggerButtonClassnames}>
              <span className={triggerTextClassnames}>{selectedValue}</span>
              {dropDownIsOpened ? <DropdownArrowUp /> : <DropdownArrowDown />}
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className={dropdownContentClassnames}
              sideOffset={2}
              align="start"
              side="bottom"
              style={customStyles.content as React.CSSProperties}
              onCloseAutoFocus={event => event.preventDefault()}
            >
              {dropDownIsOpened &&
                Object.entries(DROPDOWN_OPTIONS).map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <DropdownMenu.Item
                      key={key}
                      className={dropdownItemClassnames}
                      onSelect={() => {
                        setSelectedValue(value);
                        setDropDownIsOpened(false);
                      }}
                    >
                      {value}
                    </DropdownMenu.Item>
                  </motion.div>
                ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </AnimatePresence>
    </div>
  );
};
