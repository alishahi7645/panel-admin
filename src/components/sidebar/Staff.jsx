import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LineStyle, Report, Timeline, TrendingUp, Work } from "@material-ui/icons";




function Staff() {
    const [active, setactive] = useState(false);
    const activehandler = () => {
        setactive(!active)
    }
    return (

        <Sidebarwrapper>
            <Sidebarmenu>
                <Sidebartitle>Staff</Sidebartitle>
                <Sideballist>
                    <div className={active ? 'active' : 'sidebarlistitem'} onClick={activehandler}>
                        <Work className="sidebaricons"/>
                        Manage
                    </div>
                    <div className={active ? 'active' : 'sidebarlistitem'} onClick={activehandler}>
                        <Timeline className="sidebaricons"/>
                        Analytics
                    </div>
                    <div className={active ? 'active' : 'sidebarlistitem'} onClick={activehandler}>
                        <Report className="sidebaricons"/>
                        Reports
                    </div>
                </Sideballist>
            </Sidebarmenu>
        </Sidebarwrapper>

    )
}

const Sidebardiv = styled(motion.div)`
    flex:1;
    position:sticky;
    top:50px;
    background-color:rgb(251,251,255);
    height:calc(100vh - 50px);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const Sidebarwrapper = styled(motion.div)`
    padding:20px;
    color:#555;
`;
const Sidebarmenu = styled(motion.div)`
    margin-bottom:10px;
`;
const Sidebartitle = styled(motion.div)`
    color:rgb(187,186,186);
    font-size:17px;
`;
const Sideballist = styled(motion.div)`
    list-style:none;
    padding:5px;
    .sidebarlistitem{
        cursor:pointer;
        padding:5px;
        display:flex;
        align-items:center;
        transition:all 0.3s ease;
        margin-left:5px;
    
        :hover{
            color:#000;
        }
        .sidebaricons{
            margin-right:4px;
        }
    }
    .active{
        background-color:rgb(240,240,255);
        cursor:pointer;
        padding:5px;
        display:flex;
        align-items:center;
        transition:all 0.3s ease;
        margin-left:5px;
    
        :hover{
            color:#000;
        }
    }
`;
const Sidebarlistitems = styled(motion.div)`
    cursor:pointer;
    padding:5px;
    display:flex;
    align-items:center;
    transition:all 0.3s ease;

    :hover{
        color:#000;
    }
`
export default Staff;