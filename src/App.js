import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Home from "./components/Pages/home/Home";

function App(){
    return(
        <div>
            <Topbar/>
            <Container>
                <Sidebar/>
                <Home/>
            </Container>
        </div>
    )
}
const Container = styled(motion.div)`
    display:flex;
`;
export default App