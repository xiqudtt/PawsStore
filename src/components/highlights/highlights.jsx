import './highlights.css';

const Highlights = ({ highlights }) => {
    return (
        <ul className="highlights">
            {highlights.map((item, idx) => <li key={idx} className="highlights__item">• {item}</li>)}
        </ul>
    )
}

export default Highlights;