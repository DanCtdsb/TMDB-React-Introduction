type ButtonGroupProps = {
  value: string | undefined;
  onClick: (value: string) => void;
  options: { label: string; value: string }[];
};

export const ButtonGroup = ({ value, onClick, options }: ButtonGroupProps) => {
  return (
    <div className="flex gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onClick(option.value)}
          className={`text-[12px] px-2.5 py-1.5 rounded-md border transition-colors cursor-pointer ${
            value === option.value
              ? "text-white bg-white/12 border-white/15"
              : "text-white/45 bg-transparent border-transparent hover:text-white hover:bg-white/8"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
