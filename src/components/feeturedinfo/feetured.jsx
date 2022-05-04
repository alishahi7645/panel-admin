import React from "react";
import { ArrowDownward, ArrowUpwardSharp } from "@material-ui/icons";
import styled from 'styled-components'
function Feeturedinfo(){
    return(
        <Feetureddic>
            <div className="feetureditem">
                <span className="feeturedtitle">revenue</span>
                <div className="feeturedmoneycontainer">
                    <span className="feeturedmoney">$2,415</span>
                    <span className="feeturedmoneyrate">-11.4 <ArrowDownward/></span>
                </div>
                <span className="feeturedsub">Compared to last moth</span>
            </div>
            <div className="feetureditem">
                <span className="feeturedtitle">sale</span>
                <div className="feeturedmoneycontainer">
                    <span className="feeturedmoney">$7,415</span>
                    <span className="feeturedmoneyrate">-1.4 <ArrowDownward/></span>
                </div>
                <span className="feeturedsub">Compared to last moth</span>
            </div>
            <div className="feetureditem">
                <span className="feeturedtitle">cost</span>
                <div className="feeturedmoneycontainer">
                    <span className="feeturedmoney">$8,415</span>
                    <span className="feeturedmoneyrate">+1.4 <ArrowUpwardSharp/></span>
                </div>
                <span className="feeturedsub">Compared to last moth</span>
            </div>
        </Feetureddic>
    )
}
const Feetureddic = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`

export default Feeturedinfo;