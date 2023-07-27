
import Classes from '../../Assets/Styles/UI/spinner.module.scss';

const spinnerLoaded = _ =>{

    return(
        <>
            <div className={Classes['lds-ripple']}>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default spinnerLoaded;