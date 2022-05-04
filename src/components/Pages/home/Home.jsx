import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import Feeturedinfo from "../../feeturedinfo/feetured";
function Home(){
    return(
        <Homediv>
            <Feeturedinfo/>
        </Homediv>
    )
}

const Homediv = styled(motion.div)`
    flex:4;
`
export default Home;