type ImageGridProps = {
    results: Array<{
      id: number;
      imagePath: string | null;
      primaryText: string;
      secondaryText?: string;
      tertiaryText?: string;
    }>;
    onClick?: (id: number) => void;
  };
  

export const ImageGrid = ({ results, onClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
      {results.map((data) => (
        <div
          key={data.id}
          onClick={() => onClick?.(data.id)}
          className="group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-xl bg-[#111]"
        >
          {data.imagePath ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.imagePath}`}
              alt={data.primaryText}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-white/25">
              No Image
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-sm font-semibold leading-snug text-white">
              {data.primaryText}
            </h3>
            {data.secondaryText && (
              <p className="mt-0.5 text-xs text-white/50">{data.secondaryText}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};