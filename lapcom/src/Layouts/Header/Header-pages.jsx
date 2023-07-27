import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import ClassesGlobal from '../../Assets/Styles/Base/Globals.module.scss';
import Header from './Header';

const HeaderPages = props =>{
    const { headingSpan, heading, headerLinks } = props;
    return(
        <Header classStyle={ClassesGlobal['header-page']}>
            <div className={ClassesGlobal['header__desc']}>
                <Container>
                    <h2>
                        <span>{headingSpan}</span> {heading}
                    </h2>
                </Container>
            </div>
            <div className={ClassesGlobal['breadcrumbs']}>
                <Container className={ClassesGlobal.container}>
                    <Link to='/'>Home</Link>
                    {
                        headerLinks.map((itemLink, index)=>{
                            const { path, title } = itemLink;
                            if(!path){
                                return(
                                    <Fragment key={index}>
                                        <FontAwesomeIcon icon={faArrowRightLong} />
                                        <span> {title}</span>
                                    </Fragment>
                                )
                            }
                            return(
                                <Fragment key={index}>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                    <Link to={path}> {title}</Link>
                                </Fragment>
                            )
                        })
                    }
                </Container>
            </div>
        </Header>
    )
}

export default HeaderPages;