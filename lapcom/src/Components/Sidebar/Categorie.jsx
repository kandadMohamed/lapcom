import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Classes from '../../Assets/Styles/Components/Sidebar/Sidebar.module.scss';
import Styled from '../../Assets/Styles/Components/Sidebar/Categorie.module.scss';
import { getAllCategorie } from '../../Store/Actions/categorie-actions';
import { filterActions } from '../../Store/Slice/Filter-slice';

const Categorie = _ =>{
    const categorieData = useSelector(state=>state.categorie);
    const dispatch = useDispatch();
    console.log(categorieData.categories);

    useEffect(_=>{
        dispatch(getAllCategorie());
    },[])

    const clickFilterByCategorieHandler = CatId=>{
        dispatch(
            filterActions.filterByCategorie(CatId)
        )
    }
    
    return(
        <div className={Styled['sidebar__categorie']}>
            <h4 className={Classes['sidebar__title']}>CATEGORIES</h4>
            <ul>
                <li>Devices</li>
                {
                    categorieData.categories.map((catItem, index)=>{
                        console.log('first')
                        const { IdCat, Img, Title } = catItem;
                        return <li key={index} onClick={_=>clickFilterByCategorieHandler(IdCat)}>
                            For {Title}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categorie;