type ButtonGroupProps = {
  value: string | undefined;
  onClick: (value: string) => void;
  options: { label: string; value: string }[];
};

export const ButtonGroup = ({ value, onClick, options }: ButtonGroupProps) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option.value} onClick={() => onClick(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};
