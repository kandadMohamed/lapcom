
import Classes from '../../Assets/Styles/Components/SingleProduct/Product-img.module.scss';
import ProductEtat from '../UI/Product-etat';

const ProductImg = props =>{

    const { Photo, TauxPromotion, Date, QteStock  } = props.product;
    console.log(props.product);
    return(
        <div className={Classes['imgs-content']}>
            <div className={Classes['default-img']}>
                {/* <img src={require(`../../Assets/Img/Products/${Photo.toLowerCase()}.jpg`)} alt="" /> */}
                <img src={`http://localhost:8000/products/${Photo.toLowerCase()}`} alt="" />
                <ProductEtat 
                    promotion={TauxPromotion}
                    dateAdd={Date}
                    quantity={QteStock}
                />
            </div>
        </div>
    )
}

export default ProductImg;