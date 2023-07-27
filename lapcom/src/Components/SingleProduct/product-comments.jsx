import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/SingleProduct/Product-tabs.module.scss';
import ImgUser from '../../Assets/Img/userIcon.png'
import CommentsForm from './product-comments-form';
import { addCommentByProduct, getCommentsByProduct } from '../../Store/Actions/comments-action';

const ProductComments = _ =>{
    const params = useParams();
    const dispatch = useDispatch();
    const dataComments = useSelector(state=>state.comments);
    console.log("🚀 ~ file: product-comments.jsx ~ line 16 ~ dataComments", dataComments)

    useEffect(_=>{
        dispatch(getCommentsByProduct(params.id));
    },[])


    return(
        <div className={Classes['comments-content']}>
            <div className={Classes['comment-items']}>
                {
                    dataComments.status === 'success' &&
                    dataComments.commentsItems.map((commentItem,index)=>{
                        const { Firstname, Lastname, message, rating } = commentItem;
                        const arrayRate = []
                        for (let index = 1; index <=5; index++) {
                            let classesRate = '';

                            if(index<=rating)
                                classesRate = Classes['isRate'];
                            else
                                classesRate = Classes['no-rate'];
                            
                            arrayRate.push(classesRate);
                        }
                        return (
                            <div key={index} className={Classes['comment-item']}>
                                <div className={Classes['comment-item__img']}>
                                    <img src={ImgUser} alt="" />
                                </div>
                                <div className={Classes['comment-item__title']}>
                                    <div>
                                        <h4 className={Classes['name']}>{Lastname} {Firstname}</h4>
                                        <div className={Classes['rating']}>
                                            {
                                                arrayRate.map((item,index)=>{
                                                    return <span key={index} className={item}><FontAwesomeIcon icon={faStar}/></span>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={Classes['desc']}>
                                        {message}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <CommentsForm />
        </div>
    )
}

export default ProductComments;