import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/Profile/Order-track.module.scss';

import ImgProcess from '../../Assets/Img/OrderTrack/track_1.png';
import OrderShipped from '../../Assets/Img/OrderTrack/track_3.png';
import OrderEnRoute from '../../Assets/Img/OrderTrack/track_4.png';
import OrderArrived from '../../Assets/Img/OrderTrack/track_5.png';

const OrderTrack = _ =>{

    const classesOrdertTrackItemEtatCompleted = `${Classes['order-track__item__etat']} ${Classes['order-completed']}`;
    const classesOrdertTrackItemEtatInCompleted = `${Classes['order-track__item__etat']} ${Classes['order-incompleted']}`;

    return(
        <div className={Classes['order-track-content']}>
            <ul className={Classes['order-track']}>
                <li className={Classes['order-track__item']}>
                    <span className={Classes['order-track__item__icon']}>
                        <img src={ImgProcess}/>
                    </span>
                    <span className={classesOrdertTrackItemEtatCompleted}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span className={Classes['order-track__item__title']}>
                        Order Processed
                    </span>
                </li>
                <li className={Classes['order-track__item']}>
                    <span className={Classes['order-track__item__icon']}>
                        <img src={OrderShipped}/>
                    </span>
                    <span className={classesOrdertTrackItemEtatCompleted}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span className={Classes['order-track__item__progressbar']}></span>
                    </span>
                    <span className={Classes['order-track__item__title']}>
                        Order Processed
                    </span>
                </li>
                <li className={Classes['order-track__item']}>
                    <span className={Classes['order-track__item__icon']}>
                        <img src={OrderEnRoute}/>
                    </span>
                    <span className={classesOrdertTrackItemEtatInCompleted}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span className={Classes['order-track__item__progressbar']}></span>
                    </span>
                    <span className={Classes['order-track__item__title']}>
                        Order Processed
                    </span>
                </li>
                <li className={Classes['order-track__item']}>
                    <span className={Classes['order-track__item__icon']}>
                        <img src={OrderArrived}/>
                    </span>
                    <span className={classesOrdertTrackItemEtatInCompleted}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span className={Classes['order-track__item__progressbar']}></span>
                    </span>
                    <span className={Classes['order-track__item__title']}>
                        Order Processed
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default OrderTrack;