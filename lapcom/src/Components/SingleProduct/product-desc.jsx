
import Classes from '../../Assets/Styles/Components/SingleProduct/Product-tabs.module.scss';

const ProductDesc = props =>{

    return(
        <div className={Classes['desc-content']}>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default ProductDesc;