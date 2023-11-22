import { Link } from 'react-router-dom'
import './Card.css'

type CardProps = {
    text: string,
    route: string,
}

export const Card = ({ text, route }: CardProps) => {
    const scroll = () => {
        setTimeout(() => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            })
        }, 650)
    }

    return (
        <Link onClick={scroll} to={route} className="card">
            <div className="text">{text}</div>
        </Link>
    )
}