import './Card.css';

function Card(props){
    return (
        <div className='item'>{props.children}</div>
    );
}

export default Card;