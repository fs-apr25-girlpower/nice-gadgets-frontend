export type ArrowLeftButtonProps = {
  isDisabled?: boolean;
};

export const ArrowLeftButton = ({ isDisabled }: ArrowLeftButtonProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    className={isDisabled ? 'stroke-[#B4BDC4]' : ''}
  >
    <path
      className={
        isDisabled
          ? 'stroke-[#B4BDC4]'
          : 'group-hover:stroke-[#313237] stroke-[#B4BDC4]'
      }
      d="M.5.5h31v31H.5z"
    />
    <path
      fill="#313237"
      fillRule="evenodd"
      d="M18.471 11.529a.667.667 0 0 0-.943 0l-4 4a.667.667 0 0 0 0 .942l4 4a.667.667 0 1 0 .943-.942L14.943 16l3.528-3.529a.667.667 0 0 0 0-.942Z"
      clipRule="evenodd"
    />
  </svg>
);
