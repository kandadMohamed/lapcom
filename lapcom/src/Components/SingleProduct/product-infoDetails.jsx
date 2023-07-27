
import Classes from '../../Assets/Styles/Components/SingleProduct/Product-tabs.module.scss';

const ProductInfoDetails = _ =>{

    return(
        <table className={Classes['product-info']}>
            <tbody>
                <tr>
                    <td>Weight</td>
                    <td>0.5 kg</td>
                </tr>
                <tr>
                    <td>Dimensions</td>
                    <td>35 × 20 × 56 cm</td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>Green, Red, Violet</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProductInfoDetails;