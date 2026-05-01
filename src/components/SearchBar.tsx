
type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search actors, directors..."
      className="flex-1 bg-white/7 border border-white/10 rounded-lg px-3 py-1.5 text-[13px] text-white placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
    />
  );
};