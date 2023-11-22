import { Link } from 'react-router-dom'
import './Card.css'

type CardProps = {
    text: string,
    route: string,
}

export const Card = ({ text, route }: CardProps) => {

    return (
        <Link to={route} className="card">
            <div className="text">{text}</div>
        </Link>
    )
}