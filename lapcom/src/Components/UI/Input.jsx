import { forwardRef } from 'react';

import Classes from '../../Assets/Styles/UI/Input.module.scss';

const Input = forwardRef((props,ref) =>{
    const { 
        type, 
        placeholder, 
        changeHandler, 
        value,
        classStyle,  
        name, 
        messageError,
        maxLength
    } = props;
    
    return(
        <div className={`${Classes['input-content__style']} ${classStyle}`}>
            <input 
                name={name}
                type={type}
                placeholder={placeholder} 
                className={Classes['input-style']}
                onChange={changeHandler}
                defaultValue={value}
                ref={ref}
                minLength={5}
            />
            {messageError? <p className={Classes['input-message']}>{messageError}</p> : null}
        </div>
    )
})

export const Textarea = forwardRef((props,ref) =>{
    const {
        rows,
        cols,
        placeholder, 
        changeHandler, 
        value, 
        name, 
        messageError
    } = props;
    return(
        <div className={Classes['input-content__style']}>
            <textarea 
                name={name}
                placeholder={placeholder} 
                className={Classes['input-style']}
                onChange={changeHandler}
                value={value}
                ref={ref}
                rows={rows}
                cols={cols}
            >
            </textarea>
            <br/>
            {messageError? <p className={Classes['input-message']}>{messageError}</p> : null}
        </div>
    )
})
export default Input;

export const InputAdmin = forwardRef((props,ref) =>{
    const { 
        type, 
        placeholder, 
        changeHandler, 
        value,
        classStyle,  
        name, 
        messageError,
        maxLength,
        accept
    } = props;
    
    return(
        <div className={`${Classes['input-content__style']} ${classStyle}`}>
            <input 
                name={name}
                type={type}
                placeholder={placeholder} 
                className={Classes['input-admin']}
                onChange={changeHandler}
                defaultValue={value}
                ref={ref}
                minLength={5}
                accept={accept}
            />
            {messageError? <p className={Classes['input-message']}>{messageError}</p> : null}
        </div>
    )
})

export const TextareaAdmin = forwardRef((props,ref) =>{
    const {
        rows,
        cols,
        placeholder, 
        changeHandler, 
        value, 
        name, 
        messageError
    } = props;
    return(
        <div className={Classes['input-content__style']}>
            <textarea 
                name={name}
                placeholder={placeholder} 
                className={Classes['input-admin']}
                onChange={changeHandler}
                value={value}
                ref={ref}
                rows={rows}
                cols={cols}
            >
            </textarea>
            {messageError? <p className={Classes['input-message']}>{messageError}</p> : null}
        </div>
    )
})