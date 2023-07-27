import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/CheckOut/checkout-billing-details.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import Input from '../UI/Input';
import data from '../../Api/ma.json';
import SelectCity from '../UI/Select-react';
import { getAllVille } from '../../Store/Actions/ville-actions';
import { getAdresseByUser } from '../../Store/Actions/adresse-actions';

let dataCity = [];

const CheckoutBillingDetails = props =>{
    const {adressShip, onAdressesChange} = props;
    const [villePrix, setVillePrix] = useState(20);
    const villeData = useSelector(state=>state.ville);
    const adressesData = useSelector(state=>state.adresses);
    const dispatch = useDispatch();

    useEffect(_=>{
        dispatch(getAllVille());
        dispatch(getAdresseByUser());
    },[dispatch])
    
    const onCityChangeHandler = value=>{
        setVillePrix(value.prix);
    }

    if(villeData.status === 'success'){
        dataCity = [];
        for(let ville in villeData.villeItems){
            dataCity.push({
                label: villeData.villeItems[ville].title,
                value: villeData.villeItems[ville].id_ville,
                prix: villeData.villeItems[ville].prix
            })
        }
    }

    let adressesContent;
    if(adressesData.status === 'success' && 
        adressesData.adresseItems.length>0 && 
        adressesData.adresseItems !== null
    ){
        adressesContent = adressesData.adresseItems.map((adressItem, index)=>{
            const { 
                city,
                email,
                first_name,
                id_adresse,
                id_client,
                last_name,
                phone,
                street_adresse,
                zip,
                prix, 
                title 
            } = adressItem;
            return(
                <Col md={6} key={index}>
                    <div 
                        onClick={_=>onAdressesChange(adressItem)} 
                        className={`${Classes['adresse-item']} ${adressShip.id_adresse === id_adresse && Classes.active}`}
                    >
                        <ul>
                            <li>{first_name} {last_name}</li>
                            <li>{title}</li>
                            <li>{street_adresse}</li>
                            <li>{zip}</li>
                            <li>{phone}</li>
                            <li>{email}</li>
                        </ul>
                    </div>
                </Col>
            )
        })
    }
    return(
        <Col md={6} className={Classes['check-out-billing-details']}>
            <h2 className={ClassesGlobals['checkout__title']}>
                <FontAwesomeIcon icon={faTruck}/>
                BILLING DETAILS
            </h2>
            <form action="">
                <Row>
                    <Col md={12}>
                        <Row>
                            {adressesContent}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Input  
                            type='text'
                            placeholder='First Name *'
                            value={adressShip.first_name}
                        />
                    </Col>
                    <Col md={6}>
                        <Input  
                            type='text'
                            placeholder='Last Name *'
                            value={adressShip.last_name}
                        />
                    </Col>
                    <Col md={12}>
                        <SelectCity 
                            changeHandler={onCityChangeHandler} 
                            data={dataCity} 
                            placeholder='City *' 
                            defaultValue={
                                {
                                    value: adressShip.city,
                                    label: adressShip.title,
                                    prix: adressShip.prix
                                }
                            }
                        />
                    </Col>
                    <Col md={12}>
                        <Input  
                            type='text'
                            placeholder='Street address *'
                            value={adressShip.street_adresse}
                        />
                    </Col>
                    <Col md={12}>
                        <Input  
                            type='text'
                            placeholder='Postcode / ZIP *'
                            value={adressShip.zip}
                        />
                    </Col>
                    <Col md={12}>
                        <Input  
                            type='text'
                            placeholder='Phone *'
                            value={adressShip.phone}
                            />
                    </Col>
                    <Col md={12}>
                        <Input  
                            type='email'
                            placeholder='Email address *'
                            value={adressShip.email}
                        />
                    </Col>
                </Row>
            </form>
        </Col>
    )
}

export default CheckoutBillingDetails;