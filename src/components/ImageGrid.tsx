type ImageGridProps = {
    results: Array<{
      id: number;
      imagePath: string | null;
      primaryText: string;
      secondaryText?: string;
    }>;
    onClick?: (id: number) => void;
  };
  

export const ImageGrid = ({results, onClick} : ImageGridProps) => {
    return (
    <div>
        {results.map((data) => (
            <div key={data.id} onClick = {() => onClick?.(data.id)}>
                <h3>{data.primaryText}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${data.imagePath}`} alt={data.primaryText} />
            </div>
        ))}
    </div>
    )
}
