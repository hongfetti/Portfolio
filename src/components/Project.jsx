
export default function Project() {
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                This card is a placeholder for a Portfolio Project card
            </p>
        </div>
    );
}