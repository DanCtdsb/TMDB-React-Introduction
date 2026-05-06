type KeyvalueItemsProps = {
  label: string;
  value: string | number | undefined;
};

export const KeyValueLabels = ({ label, value }: KeyvalueItemsProps) => {
  return (
    <div className="flex gap-2 items-baseline">
      <h3 className="text-[12px] text-white/40 uppercase tracking-wider">
        {label}
      </h3>
      <p className="text-[13px] text-white/80">{value}</p>
    </div>
  );
};
