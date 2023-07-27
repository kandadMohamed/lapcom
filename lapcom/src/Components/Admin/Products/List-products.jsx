import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Table, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

import Classes from '../../../Assets/Styles/Components/Admin/products/List-products.module.scss';
import { CardAdmin } from '../../../Components/UI/Card';
import { getAllProducts, deleteProduct } from '../../../Store/Actions/product-actions';
import { filterActions } from '../../../Store/Slice/Filter-slice';

let dataCheck = [];


const ListProducts = _ =>{
    const [ productCheck, setProductCheck ] = useState(dataCheck);
    const productData = useSelector(state=>state.product);
    const filterData = useSelector(state=>state.filter);
    const dispatch = useDispatch();

    useEffect(_=>{
        document.title = 'List Products - Lap Com';
        dispatch(getAllProducts(filterData));
    },[filterData])
    
    const onProductCheckChangeHandler = e =>{
        const { id, checked } = e.target;
        if(checked === true){
            dataCheck.push(+id);
        }else{
            dataCheck = dataCheck.filter(i=>i != +id);
        }
        setProductCheck([...dataCheck]);
    }
    const onCheckedAllProductsToggle = e=>{
        const { id, checked } = e.target;
        if(checked === true){
            for (const item of productData.items) {
                dataCheck.push(item.IdProduit);
            }
        }else{
            dataCheck = [];
        }
        setProductCheck([...dataCheck]);
    }
    const onDeleteProductHandler = idProduct =>{
        dispatch(deleteProduct(idProduct));
    }
    const onPaginationChangeHandler = e=>{
        console.log(e.selected);
        dispatch(filterActions.numberPage(e.selected+1));
    }
    
    let contentProductRender = <tr>
        <td colSpan={8}>
            <p>No Products</p>
        </td>
    </tr>;

    if(productData.status === 'success' && productData.items.length > 0){
        contentProductRender = productData.items.map((productItem, index)=>{
            const { 
                Date,
                Description,
                IdCat,
                IdProduit,
                Photo,
                Prix,
                QteEnReptureStock,
                QteStock,
                TauxPromotion,
                Title,
                couleur 
            } = productItem;
            
            return(
                <tr key={index} className={`${productCheck.findIndex(el=>el==+IdProduit) !== -1? Classes['tr-selected']: null}`}>
                    <td>
                        <input 
                            onChange={onProductCheckChangeHandler} 
                            className="form-check-input" 
                            type="checkbox" 
                            id={+IdProduit}
                            checked={productCheck.includes(+IdProduit)}
                        />
                    </td>
                    <td>
                        <Link to={`products/${IdProduit}`}>#{IdProduit}</Link>
                    </td>
                    <td>
                        <Link to={`products/${IdProduit}`}>
                            <img src={`http://localhost:8000/products/${Photo.toLowerCase()}`} className="rounded" width="40"
                                alt="..."/>
                        </Link>
                    </td>
                    <td>{Title}</td>
                    <td>
                        {   
                            (QteStock<=0 && 
                            QteStock === QteEnReptureStock)?
                            <span className="text-danger">
                                Out of Stock
                            </span>:
                            <span className="text-success">
                                In Stock
                            </span>
                        }
                    </td>
                    <td>${Prix}</td>
                    <td>{Date}</td>
                    <td className="text-end">
                        <Dropdown  align="end" className={Classes['dropdown']}>
                            <Dropdown.Toggle as='span' id="dropdown-basic">
                                <FontAwesomeIcon icon={faEllipsis}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={Classes['dropdown-menu']}>
                                <Dropdown.Item className={Classes['dropdown-item']} as={Link} to={`/admin/products/manage?type=edit&id=${IdProduit}`}>Edit</Dropdown.Item>
                                <Dropdown.Item className={Classes['dropdown-item']} as='button' onClick={_=>onDeleteProductHandler(IdProduit)}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
            )
        })
    }

    return(
        <Col md={12}>
            <div className={Classes['products-admin']}>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>
                                <input className="form-check-input select-all" type="checkbox"
                                    data-select-all-target="#products" id="defaultCheck1" onChange={onCheckedAllProductsToggle}/>
                            </th>
                            <th>ID</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentProductRender}
                    </tbody>
                </Table>
                <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faArrowLeft}/>}
                    nextLabel={<FontAwesomeIcon icon={faArrowRight}/>}
                    containerClassName={Classes['container-paginate']}
                    onPageChange={onPaginationChangeHandler}
                    pageCount={Math.ceil(productData.productCount / filterData.numberProductInPage)}
                />
            </div>
        </Col>
    )
}

export default ListProducts;