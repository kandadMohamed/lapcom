import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { useFormik } from 'formik';

import Classes from '../../../Assets/Styles/Components/Admin/products/form-newProduct.module.scss';
import ClassesGlobals from '../../../Assets/Styles/Base/Globals.module.scss';
import { CardAdmin } from "../../UI/Card";
import { InputAdmin, TextareaAdmin } from "../../UI/Input";
import SelectCategorie from "../../UI/Select-react";
import ButtonSubmit from "../../UI/Button";
import { getAllCategorie } from '../../../Store/Actions/categorie-actions';
import { addProducts, getSingelProduct } from '../../../Store/Actions/product-actions';

let dataSelectCategorie = [];

const validate = values =>{

    const errors = {};

    if (!values.title) {
        errors.title = 'Title Required';
    }

    if(!values.desc){
        errors.desc = 'Description Required'
    }

    if(!values.price === ''){
        errors.price = 'Price Required'
    }

    if(values.promotion === ''){
        errors.promotion = 'Taux Promotoion Required'
    }

    if(values.Quantity === ''){
        errors.Quantity = 'Qauntity Required'
    }

    if(values.QuantityR === ''){
        errors.QuantityR = 'Qauntity Required'
    }
    
    return errors;
}

const initialValues = {
    title: '',
    desc: '',
    price: '',
    promotion: '',
    Quantity: '',
    QuantityR: '',
    img: ''
}

// error: ""
// items:
// Date: "2022-06-03"
// Description: "Remote Controle"
// IdCat: 1
// IdProduit: 75
// Photo: "104116.jpg"
// Prix: 12
// QteEnReptureStock: 10
// QteStock: 100
// TauxPromotion: 20
// Title: "Remote Controle"
// catId: 1
// catTitle: "Drone"
// couleur: "red"
// [[Prototype]]: Object
// productCount: 0
// status: "success"

const FormNewProduct = _ =>{
    const categorieData = useSelector(state=>state.categorie);
    const productData = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const [ categorie, setCategorie ] = useState(1);
    const [ categorieDe, setCategorieDe ] = useState({});
    const [ img, setImg ] = useState();
    const [searchParams] = useSearchParams();
    console.log("🚀 ~ file: form-newProduct.jsx ~ line 55 ~ productData", productData)

    const paramsType = searchParams.get('type');
    const paramsId = searchParams.get('id');

    if(paramsType === 'edit'){

        if(productData.status === 'success' && productData.items.length > 0){
            initialValues.title = productData.items[0].Title;
            initialValues.desc = productData.items[0].Description;
            initialValues.price = productData.items[0].Prix;
            initialValues.promotion = productData.items[0].TauxPromotion;
            initialValues.Quantity = productData.items[0].QteStock;
            initialValues.QuantityR = productData.items[0].QteEnReptureStock;
            // setCategorieDe({
            //     label: productData.items[0].catTitle,
            //     value: productData.items[0].catId
            // })
            if(categorieData.status === 'success' && categorieData.categories.length > 0)
                console.log(categorie.filter(cat=>cat.value === productData.items[0].catId));
        }
    }
    
    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const promotionRef = useRef();
    const QuantityRef = useRef();
    const QuantityRRef = useRef();
    const imgRef = useRef();

    useEffect(_=>{
        titleRef.current.focus();
        dispatch(getAllCategorie());
        if(paramsType === 'edit'){
            dispatch(getSingelProduct({
                    productId:paramsId
            }))
        }
    },[])

    if(categorieData.status === 'success'){
        dataSelectCategorie = [];
        for (const categorieItem of categorieData.categories) {
            dataSelectCategorie.push({
                label: categorieItem.Title,
                value: categorieItem.IdCat
            })
        }
    }


    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values=>{
            if(img){
                const data = new FormData() 
                data.append('image', img)
                data.append('cat', categorie)
                for (const key in values) {
                    data.append(key, values[key]);
                }
                dispatch(addProducts(data));
            }
        }
    })

    const onSelectShowProductOnPageChange = value =>{
        setCategorie(value.value);
    }

    const onChooseImg = event =>{
        setImg(event.target.files[0]);
    }

    return (
        <>
            <Col xs={12}>
                {
                    paramsType === 'add'?
                    <h6 className={ClassesGlobals['admin-heading']}>
                        Add New Product
                    </h6>:
                    <h6 className={ClassesGlobals['admin-heading']}>
                        Edit Product <span>#{paramsId}</span>
                    </h6>
                }
            </Col>
            <Col xs={12}>
                <form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <CardAdmin >
                                <h6 className={ClassesGlobals['admin-heading']}>
                                    Basic
                                </h6>
                                <Row>
                                    <Col md={12}>
                                        <InputAdmin 
                                            type='text' 
                                            placeholder='Product Title'
                                            ref={titleRef} 
                                            name='title'
                                            changeHandler={formik.handleChange}
                                            value={formik.values.title}
                                            messageError={formik.errors.title}
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <TextareaAdmin  
                                            type='text' 
                                            placeholder='Product Description'
                                            rows={5}
                                            ref={descRef} 
                                            name='desc'
                                            changeHandler={formik.handleChange}
                                            value={formik.values.desc}
                                            messageError={formik.errors.desc}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <InputAdmin 
                                            type='number' 
                                            placeholder='Regular price'
                                            ref={priceRef} 
                                            name='price'
                                            changeHandler={formik.handleChange}
                                            value={formik.values.price}
                                            messageError={formik.errors.price} 
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <InputAdmin 
                                            type='number' 
                                            placeholder='Taux Promotion'
                                            ref={promotionRef} 
                                            name='promotion'
                                            changeHandler={formik.handleChange}
                                            value={formik.values.promotion}
                                            messageError={formik.errors.promotion}  
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <InputAdmin 
                                            type='number' 
                                            placeholder='Qauntity' 
                                            ref={QuantityRef} 
                                            name='Quantity'
                                            changeHandler={formik.handleChange}
                                            value={formik.values.Quantity}
                                            messageError={formik.errors.Quantity}  
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <InputAdmin 
                                            type='number' 
                                            placeholder='Qauntity Repture' 
                                            ref={QuantityRRef} 
                                            name='QuantityR'
                                            changeHandler={formik.handleChange}
                                            value={formik.values.QuantityR}
                                            messageError={formik.errors.QuantityR}  
                                        />
                                    </Col>
                                </Row>
                            </CardAdmin>
                            <Row>
                                <Col xs={{span:3, offset: 9}}>
                                    <ButtonSubmit type='submit' variante='btn-blue__outline'> Add Product</ButtonSubmit>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col xs={12}>
                                    <CardAdmin >
                                        <h6 className={ClassesGlobals['admin-heading']}>
                                            Media
                                        </h6>
                                        <Row>
                                            <Col md={12} style={{textAlign: 'center'}}>
                                                <svg id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m452.21 235.945v147.15l-59.398-84.777c-1.945-2.774-5.127-2.774-7.072 0l-50.657 72.301-89.435-127.646c-1.945-2.775-5.127-2.775-7.072 0l-89.66 127.967-50.881-72.621c-1.945-2.774-5.127-2.774-7.072 0l-60.243 85.982v-225.891c0-3.395 2.765-6.171 6.144-6.171h304.359c.324-10.917 2.679-21.329 6.733-30.852h-341.812c-3.379 0-6.144 2.778-6.144 6.171v309.752c0 3.395 2.765 6.171 6.144 6.171h470.642c3.379 0 6.145-2.776 6.145-6.171v-219.209c-8.778 7.96-19.217 14.098-30.721 17.844z" fill="#c4d2dc"/><path d="m426.079 240.095c-46.825 0-84.919-38.26-84.919-85.288 0-.861.04-1.713.065-2.567h-304.36c-3.379 0-6.144 2.776-6.144 6.171v225.891l60.243-85.982c1.945-2.774 5.127-2.774 7.072 0l50.881 72.621 89.66-127.967c1.944-2.775 5.127-2.775 7.072 0l89.435 127.646 50.657-72.301c1.944-2.774 5.127-2.774 7.072 0l59.398 84.777v-147.15c-8.239 2.682-17.016 4.149-26.132 4.149z" fill="#c7eefd"/><path d="m426.079 240.095c-46.825 0-84.919-38.26-84.919-85.288 0-47.027 38.095-85.287 84.919-85.287 46.826 0 84.921 38.26 84.921 85.287 0 47.028-38.096 85.288-84.921 85.288z" fill="#0592fb"/><path d="m392.811 296.947c-1.945-2.774-5.127-2.774-7.072 0l-51.396 73.355 29.657 42.327h82.066c3.38 0 6.144-2.777 6.144-6.171v-24.733z" fill="#00c184"/><path d="m350.589 393.488 54.932-78.4-12.71-18.141c-1.945-2.774-5.127-2.774-7.072 0l-51.396 73.355z" fill="#07b17b"/><path d="m63.212 158.41c0-3.395 2.765-6.171 6.144-6.171h-32.49c-3.379 0-6.144 2.776-6.144 6.171v224.52l32.491-46.373v-178.147z" fill="#98e5fb"/><path d="m245.648 241.602c-1.945-2.774-5.127-2.774-7.072 0l-90.203 128.742 29.627 42.285h187.478z" fill="#98e5fb"/><path d="m164.461 393.305 93.739-133.789-12.551-17.914c-1.945-2.774-5.127-2.774-7.072 0l-90.203 128.742z" fill="#01cffa"/><path d="m98.036 296.947c-1.945-2.774-5.127-2.774-7.072 0l-60.243 85.983v23.528c0 3.394 2.765 6.171 6.144 6.171h142.222z" fill="#00c184"/><path d="m63.336 406.458v-23.528l47.471-67.754-12.771-18.229c-1.945-2.774-5.127-2.774-7.072 0l-60.243 85.983v23.528c0 3.394 2.765 6.171 6.144 6.171h32.615c-3.379 0-6.144-2.777-6.144-6.171z" fill="#07b17b"/><ellipse cx="107.549" cy="223.226" fill="#fdd302" rx="32.59" ry="32.728"/><path d="m99.134 223.226c0-13.785 8.49-25.571 20.502-30.395-3.739-1.502-7.815-2.336-12.087-2.336-17.998 0-32.59 14.655-32.59 32.73 0 18.074 14.591 32.727 32.59 32.727 4.272 0 8.349-.834 12.087-2.336-12.012-4.82-20.502-16.607-20.502-30.39z" fill="#f9c500"/><ellipse cx="426.08" cy="154.807" fill="#0592fb" rx="85.92" ry="86.288"/><path d="m372.411 154.807c0-42.116 30.055-77.166 69.794-84.748-5.226-.996-10.611-1.539-16.126-1.539-47.451 0-85.919 38.633-85.919 86.287 0 47.656 38.469 86.288 85.919 86.288 5.515 0 10.9-.544 16.126-1.539-39.74-7.583-69.794-42.631-69.794-84.749z" fill="#0181fb"/><path d="m416.292 208.376c-2.276 0-4.121-1.845-4.121-4.12v-55.441h-19.383c-1.625 0-3.098-.955-3.761-2.438-.663-1.481-.395-3.215.688-4.429l33.29-37.27c.782-.875 1.899-1.376 3.074-1.376 1.174 0 2.292.501 3.073 1.376l33.291 37.27c1.083 1.214 1.351 2.948.688 4.429-.664 1.483-2.137 2.438-3.762 2.438h-19.383v55.441c0 2.275-1.845 4.12-4.121 4.12z" fill="#fff"/></svg>
                                            </Col>
                                            <Col md={12}>
                                                <InputAdmin 
                                                    type='file' 
                                                    placeholder='Product Description' 
                                                    accept=".jpg,.jpeg,.png"
                                                    ref={imgRef} 
                                                    name='img'
                                                    def="http://localhost:8000/products/103718.jpg"
                                                    changeHandler={onChooseImg}
                                                />
                                                {/* <InputAdmin 
                                                    type='file' 
                                                    placeholder='Product Description' 
                                                    accept=".jpg,.jpeg,.png"
                                                    name='img'
                                                    changeHandler={e=>setImg(e.target.files[0])}
                                                /> */}
                                            </Col>
                                        </Row>
                                    </CardAdmin>
                                </Col>
                                <Col xs={12}>
                                    <CardAdmin >
                                        <h6 className={ClassesGlobals['admin-heading']}>
                                            Organization
                                        </h6>
                                        <div className={Classes['select-categorie']}>
                                            <SelectCategorie 
                                                placeholder='Select Categorie' 
                                                data={dataSelectCategorie}
                                                changeHandler={onSelectShowProductOnPageChange}
                                                // defaultValue={categorieDe}
                                            />
                                        </div>
                                    </CardAdmin>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
            </Col>
        </>
    )
}

export default FormNewProduct;