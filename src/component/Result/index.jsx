import React from "react"
import "./Result.css"


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

        function fragnance() {
                switch(fragrance) {
                case 'None':
                    return Math.floor(totalOil * 0)
                case "Light":
                    return Math.floor(totalOil * ( 2 / 100) )
                case "Medium":
                    return Math.floor(totalOil * ( 3.5 / 100) )
                case "Strong":
                    return Math.floor(totalOil * ( 5 / 100) )
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
                        type === "Liquid" ? Math.floor(totalAmountOfLyeLiquid) : Math.floor(totalAmountOfLyeSolid)
                     }g
                     </strong>
                </p>
                <p className="result-paragraph2">Total Amount of Water Needed:<strong>
                    {
                        type === "Liquid" ? Math.floor(totalAmountOfWaterLiquid) : Math.floor(totalAmountOfWaterSolid) 
                    }g
                    </strong>                                                                               
                </p>
                <p className="result-paragraph3">Superfatting Discount: <strong>
                    {
                        type === "Liquid" ? Math.floor(superfattingValueLiquid) : Math.floor(superfattingValueSolid) 
                    }%
                    </strong>                  
                </p>
                <p className="result-paragraph2">Amount of Fragrance: <strong>
                    {
                      fragnance()
                    }g
                    </strong>                  
                </p>
                <p className="result-paragraph3">Total Batch Size: <strong>
                    {totalOil}g
                    </strong>                  
                </p>
                
            </div>
        )
    }
    
}

export default Result