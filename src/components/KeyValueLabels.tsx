type KeyvalueItemsProps = {
    label: string;
    value: string | number;
}

export const KeyValueLabels = ({ label, value }: KeyvalueItemsProps) => {
    return (
        <div>
            <h3>{label}</h3>
            <p>{value}</p>
        </div>
    );
};