type CounterProps = {
    nilai: number;
}

const Counter = ({ nilai }: CounterProps) => {
    return (
        <h2>{nilai}</h2>
    )
}

export default Counter
