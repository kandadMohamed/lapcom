
import Classes from '../../Assets/Styles/UI/Product-loading.module.scss'

const ProductLoaded = props =>{

    return(
        <div 
            className={Classes['item-product-loading']} 
            style={props.style}
        >
            <div className={Classes['product-loaded-bottom']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ProductLoaded;