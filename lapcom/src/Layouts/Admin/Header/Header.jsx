import { Col } from 'react-bootstrap';

import Classes from '../../../Assets/Styles/Layouts/Header/Header-admin.module.scss';

const Header = _ =>{

    return(
        <Col>
            <div className={Classes['header-admin']}>
                <form>
                    <div className={Classes['input-group']}>
                        <input type="text" className="form-control" placeholder="Search..."
                            aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        {/* <a href="#" class="btn btn-outline-light close-header-search-bar">
                            <i class="bi bi-x"></i>
                        </a> */}
                    </div>
                </form>
            </div>
        </Col>
    )
}
export default Header;