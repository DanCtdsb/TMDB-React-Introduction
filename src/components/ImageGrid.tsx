type GridProps = {
    id : number
    imagePath : string
    primaryText: string
}

type ImageGridProps = {
    results : GridProps[]
    
}

export const ImageGrid = ({results} : ImageGridProps) => {
    return (
    <div>
        {results.map((data) => (
            <div key={data.id}>
                <h3>{data.primaryText}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${data.imagePath}`} alt={data.primaryText} />
            </div>
        ))}
    </div>
    )
}
