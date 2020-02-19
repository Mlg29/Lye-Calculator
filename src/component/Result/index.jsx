import React from "react"
import "./Result.css"
import ReactToPrint from 'react-to-print';


 

class Result extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
   
    render() {
        const {
            type,
            level,
            measure,
            fragrance,
            totalAmountOfLyeSolid,
            totalAmountOfWaterSolid,
            superfattingValueSolid,     
            totalAmountOfLyeLiquid,
            totalAmountOfWaterLiquid,
            superfattingValueLiquid ,
            totalOil, 
        } = this.props
        
       
        return (
           
        <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint 
            ref={el => (this.componentRef = el)}
                type = {type}
                level={level}
                measure={measure}
                fragrance={fragrance}
                totalAmountOfLyeSolid = {totalAmountOfLyeSolid}
                totalAmountOfWaterSolid = {totalAmountOfWaterSolid}
                superfattingValueSolid =   {superfattingValueSolid}
                totalAmountOfLyeLiquid = {totalAmountOfLyeLiquid}
                totalAmountOfWaterLiquid = {totalAmountOfWaterLiquid}
                superfattingValueLiquid = {superfattingValueLiquid}
                totalOil = {totalOil}
        />
      </div>
            

        )
       
      
    }
    
}

export default Result

class ComponentToPrint extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        const {
            type,
            level,
            measure,
            fragrance,
            totalAmountOfLyeSolid,
            totalAmountOfWaterSolid,
            superfattingValueSolid,     
            totalAmountOfLyeLiquid,
            totalAmountOfWaterLiquid,
            superfattingValueLiquid ,
            totalOil, 
        } = this.props


            function fragnance() {
                            switch(fragrance) {
                            case "None":
                                return Math.floor(totalOil * (0 / 100) )
                            case "Light":
                                return Math.floor(totalOil * (2 / 100))
                            case "Medium":
                                return Math.floor(totalOil * ( 3.5 / 100))
                            case "Strong":
                                return Math.floor(totalOil * (5 / 100) )
                            default:
                                break

                        }
                    }

        
        return (
            <div className="result">
                    <header className="result-header">Result</header>
                    <h5 className="result-header2"> A <b>{type}</b> soap, measured in <b>{measure}</b> with superfat of <b>{level}%</b> using a <b>{fragrance}</b> Fragrance strength</h5>
                 <p className="result-paragraph">Total Amount of Lye Needed: <strong>
                    {
                        type === "Liquid" ? Math.floor(superfattingValueLiquid) : Math.floor(superfattingValueSolid) 
                    }g
                     </strong>
                </p>
                <p className="result-paragraph2">Total Amount of Water Needed:<strong>
                    {
                        type === "Liquid" ? Math.floor(totalAmountOfWaterLiquid) : Math.floor(totalAmountOfWaterSolid) 
                    }g
                    </strong>                                                                               
                </p>
                <p className="result-paragraph3">Amount of Fragrance: <strong>
                    {
                      fragnance()
                    }g
                    </strong>                  
                </p>
                <p className="result-paragraph2">Oil Selected: <strong>
                    {totalOil}g
                    </strong>                  
                </p>
                <p className="result-paragraph3">Total Batch Size: <strong>
                    { 
                        type === 'Solid' ? Math.floor(totalOil + totalAmountOfLyeSolid + totalAmountOfWaterSolid + (fragnance())) :  Math.floor(totalOil + totalAmountOfLyeLiquid + totalAmountOfWaterLiquid + (fragnance()))
                    
                    }g
                    </strong>                  
                </p>
                
            </div>
        )
    }
  
}