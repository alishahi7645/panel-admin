import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DynamicFeed, LineStyle, Mail, Message, Timeline, TrendingUp } from "@material-ui/icons";




function Notificaitions() {
    const [active, setactive] = useState(false);
    const activehandler = () => {
        setactive(!active)
    }
    return (

        <Sidebarwrapper>
            <Sidebarmenu>
                <Sidebartitle>Notificaitions</Sidebartitle>
                <Sideballist>
                    <div className={active ? 'active' : 'sidebarlistitem'} onClick={activehandler}>
                        <Mail className="sidebaricons"/>
                        mail
                    </div>
                    <div className={active ? 'active' : 'sidebarlistitem'} onClick={activehandler}>
                        <DynamicFeed className="sidebaricons"/>
                        Feedback
                    </div>
                    <div className={active ? 'active' : 'sidebarlistitem'} onClick={activehandler}>
                        <Message className="sidebaricons"/>
                        Messages
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
export default Notificaitions;