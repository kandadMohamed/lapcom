import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/UI/Alert-message.module.scss'

const AlertMessage = props =>{
    const { variante, message } = props;
    const classesAlert = `${Classes['alert-message']} ${Classes[`alert-${variante}`]}`; 

    return(
        <div className={classesAlert}>
            <span>
                <FontAwesomeIcon 
                icon={
                    variante === 'error'?
                    faTriangleExclamation:
                    faExclamation
                } 
                />
            </span>
            <p>
                <span>{variante}: </span>
                {message}
            </p>
        </div>
    )
}

export default AlertMessage;