import { Button, Drawer } from '@blueprintjs/core'
import React, { useEffect} from 'react';


import './Styles.css'

function NavBar() {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    
    return (
        <div className="cf bg-near-white  shadow-4">
            <nav className="bp3-navbar .modifier cf dt ">
                <div className="_logoGrp_ bp3-navbar-group bp3-align-left dtc-l dtc-m dtc">
                    <div className="bp3-navbar-heading b">
                        Click Motto
                    </div>
                </div>
                <div className="_featureGrp_ bp3-navbar-group bp3-align-right dtc-l dtc-m dn">
                    <button className="bp3-button bp3-minimal ">Explore</button>
                    <button className="bp3-button bp3-minimal ">Discover</button>
                    <button className="bp3-button bp3-minimal ">For Professionals</button>
                    <button className="bp3-button bp3-minimal mr2">...</button>  
                    <button className="bp3-button bp3-minimal  outline br3">Submit Photos</button>
                    <span className="bp3-navbar-divider b ml3"></span>
                    <button className="bp3-button bp3-minimal b">Login</button>
                    <Button className="b" intent="warning" text="Join Free" />
                </div>
                <div className="drawer_button bn fr pt3">
                    <Button
                        icon="menu"
                        className="gray tr-m tr-l tr"
                        // onClick={() => setOpen(true)}
                        active={false}
                        minimal={true}
                        fill={true}
                        intent="none"
                        color="#3b3b3b"
                    />

                    <Drawer
                        className="flex flex-column bg-near-white"
                        isOpen={false}
                        size={"260px"}
                        style={{ backgroundColor: '#EEEEEE', zIndex: 999 }
                        }
                        vertical={false}
                        canOutsideClickClose={true}
                        // onClose={() => setOpen(false)}
                        position={"left"}
                        hasBackdrop={true}
                    >

                        <div className="fl ">
                            <ul className="pages fl flex flex-column">
                                <li className=""> Explore </li>
                                <li className=""> Discover </li>
                                <li className=""> For Professionals </li>
                                <li className=""> Submit Photos </li>
                                <li className=""> Login </li>
                                <li className=""> Register </li>
                            </ul>
                        </div>
                    </Drawer>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
