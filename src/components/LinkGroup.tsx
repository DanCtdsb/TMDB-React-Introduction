import { Link } from "@/components/Link";

type LinkGroupProps = {
  options: Array<{
    label: string;
    to: string;
    match?: string[];
    end?: boolean;
  }>;
};

export const LinkGroup = ({ options }: LinkGroupProps) => {
  return (
    <div className="flex gap-6">
      {options.map((option) => (
        <Link
          key={option.label}
          to={option.to}
          match={option.match}
          end={option.end ?? false}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
};
