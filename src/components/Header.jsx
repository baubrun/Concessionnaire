import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container-fluid">
                <div className="row acc-img align-items-center">
                    <div className="col col-md-9 mx-auto text-right pr-2">
                        <h5 className="title-heading d-inline-block text-uppercase">La nouvelle</h5><br/>
                        <h2 className="text-uppercase my-2 d-inline-block title-heading">toyota 2020</h2><br/>
                        <h3 className="text-uppercase d-inline-block title-heading">gt</h3><br/>
                        <h6 className="text-capitalize d-inline-block title-heading">à partir de</h6><br/>
                        {/* <h2>$50,000 <Link to="" className="title-icon d-inline-block mx-2"> */}
                        <h2 className="title-heading d-inline-block">$50,000 <Link to="" className="title-icon d-inline-block mx-2">
                            <i className="fas fa-play"></i>
                            </Link></h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
