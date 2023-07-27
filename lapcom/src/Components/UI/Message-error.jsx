
import Classes from '../../Assets/Styles/UI/Message-error.module.scss'

const MessageError = props =>{

    return(
        <div className={Classes['alert-message']}>
            <div className={Classes['message-desc']}>
                <h4>Error</h4>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default MessageError;