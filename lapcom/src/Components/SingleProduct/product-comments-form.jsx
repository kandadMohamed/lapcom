import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';

import Classes from '../../Assets/Styles/Components/SingleProduct/Product-tabs.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import Input, { Textarea } from '../UI/Input';
import Button from '../UI/Button';
import { addCommentByProduct, getCommentsByProduct } from '../../Store/Actions/comments-action';

const validate = values =>{

    const errors = {};

    
    if(!values.message){
        errors.message = 'Message Is Required';
    }
    
    if(values.message.length > 300){
        errors.message = `Message Just 300 Characters (${values.message.length})`;
    }
    return errors;
}

const initialValues = {
    message: ''
}

const ProductCommentsForm = _ =>{
    const dataAuth = useSelector(state=>state.auth);
    const dataComments = useSelector(state=>state.comments);
    const dispatch = useDispatch();
    const [numberRate, setNumberRate] = useState(1);
    const messageRef = useRef();
    const params = useParams();

    console.log(dataComments);
    
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values)=>{
            if(dataAuth.isAuth){
                dispatch(addCommentByProduct({
                    dataComments:{...values, nbRate: numberRate},
                    productId : params.id,
                    clientId: dataAuth.infoUser.IdClient
                }))
                messageRef.current.value = '';
                console.log(initialValues);
            }
        }
    })
    
    useEffect(_=>{
        messageRef.current.focus();
        dispatch(getCommentsByProduct(params.id));
    },[])
    
    const numberRateClickHandler = nbOfRate =>{
        setNumberRate(nbOfRate)
    }
    const ClassesButtonComments = `${dataAuth.isAuth? ClassesGlobals['user-auth-pointer']: ClassesGlobals['user-not-auth-allowed'] }`
    const arrayRate = []
    for (let index = 1; index <=5; index++) {
        let classesRate = '';

        if(index<=numberRate)
            classesRate = Classes['isRate'];
        else
            classesRate = Classes['no-rate'];
        
        arrayRate.push(classesRate);
    }

    return(
        <div className={Classes['comments-form']}>
            <div className={Classes['rating']}>
                <h4 className={Classes.heading}>Your Rating *</h4>
                <div className={Classes['rating-number']}>
                    {
                        arrayRate.map((item,index)=>{
                            return <span key={index} onClick={_=>numberRateClickHandler(index+1)} className={item}><FontAwesomeIcon icon={faStar}/></span>
                        })
                    }
                </div>
            </div>
            <div className={Classes['comment-review']}>
                <form onSubmit={formik.handleSubmit}>
                    <h4 className={Classes.heading}>Your Review *</h4>
                    <Textarea 
                        ref={messageRef} 
                        cols="30" 
                        rows="70" 
                        messageError={formik.errors.message}
                        name='message'
                        changeHandler={formik.handleChange}
                        value={formik.values.message}
                    />
                    <Button 
                        classStyle={ClassesButtonComments}  
                        variante='btn-blue'
                    >
                        SUBMIT REVIEW
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ProductCommentsForm;