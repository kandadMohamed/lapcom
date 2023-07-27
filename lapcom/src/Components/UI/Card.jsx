
import Classes from '../../Assets/Styles/UI/Card.module.scss';

const Card = props =>{

    return(
        <div className={`${Classes['card-content']} ${props.classStyle}`}>
            {props.children}
        </div>
    )
}

export default Card;

export const CardAdmin = props =>{
    return(
        <div className={`${Classes['card-admin']} ${props.classStyle}`}>
            {props.children}
        </div>
    )
}