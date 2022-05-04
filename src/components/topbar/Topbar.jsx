import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import profile from '../../img/2.jpg'

const Topbar = () => {
    return (
        <Topbardiv>
            <Topwrapperdiv>
                <Topleftdiv>
                    <p className='logo'>panel admin</p>
                </Topleftdiv>
                <Toprightdiv>
                    <div className="topbariconright">
                        <Badge badgeContent={2} color='primary' >
                            <NotificationsNone />
                        </Badge>
                    </div>
                    <div className="topbariconright">
                        <Language />
                    </div>
                    <div className="topbariconright">
                        <Settings />
                    </div>
                    <img src={profile} className='topavatar'/>
                </Toprightdiv>
            </Topwrapperdiv>
        </Topbardiv>
    );
}
const Topbardiv = styled(motion.div)`
    width:100%;
    height:50px;
    background-color:#fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position:sticky;
    top:0;
    right:0;
    z-index:999;
`;
const Topwrapperdiv = styled(motion.div)`
    height:100%;
    padding:0px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const Topleftdiv = styled(motion.div)`
    .logo{
        font-weight:bold;
        font-size:30px;
        color:#c00;
    }
`;
const Toprightdiv = styled(motion.div)`
    display:flex;
    align-items:center;

    .topbariconright{
        margin-right:7px;
    }

    .topavatar{
        width:40px;
        height:40px;
        border-radius:50%;
        cursor:pointer;
        object-fit:cover;
    }
`
export default Topbar;