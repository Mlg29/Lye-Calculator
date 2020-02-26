import React from "react"
import "./Result.css"
import ReactToPrint from 'react-to-print';


 

class Result extends React.Component {

   
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
            oilSelected,
        } = this.props
        
       
        return (
           
        <div>
        <ReactToPrint
          trigger={() => <a href="#" className="print">
          <center><i class='fas fa-print'></i>Print this out!</center> </a>}
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
                oilSelected = {oilSelected}
        />
      </div>
            
        )
       
      
    }
    
}

export default Result

class ComponentToPrint extends React.Component {
    
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
            oilSelected
        } = this.props
        
            function fragnance() {
                            switch(fragrance) {
                            case "None":
                                return (totalOil * (0 / 100))
                            case "Light":
                                return (totalOil * (2 / 100))
                            case "Medium":
                                return (totalOil * ( 3.5 / 100))
                            case "Strong":
                                return (totalOil * (5 / 100) )
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
                        type === "Liquid" ? superfattingValueLiquid.toFixed(2) : superfattingValueSolid.toFixed(2)
                    }g
                     </strong>
                </p>
                <p className="result-paragraph2">Total Amount of Water Needed:<strong>
                    {
                        type === "Liquid" ? (totalAmountOfWaterLiquid).toFixed(2) : (totalAmountOfWaterSolid).toFixed(2)
                    }g
                    </strong>                                                                               
                </p>
                <p className="result-paragraph3">Amount of Fragrance: <strong>
                    {
                      fragnance().toFixed(2)
                    }g
                    </strong>                  
                </p>
                
                <ul className="result-paragraph2">OIL SELECTED
                    <p className="oil-selected">{ oilSelected && oilSelected.sweetalmond && 'Sweet Almond Oil' }<strong>{oilSelected.sweetalmond}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.apricot && 'Apricot Oil' }<strong>{oilSelected.apricot}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.aloeVera && 'Aloe Vera Oil' }<strong>{oilSelected.aloeVera}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.avocado && 'Avocado Oil' }<strong>{oilSelected.avocado}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.babassu && 'Babassu Oil' }<strong>{oilSelected.babassu}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.baobab && 'Baobab Oil' }<strong>{oilSelected.baobab}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.blackCumin && 'Black Cumin Oil' }<strong>{oilSelected.blackCumin}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.blackCurrant && 'Black Currant Oil' }<strong>{oilSelected.blackCurrant}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.borage && 'Borage Oil' }<strong>{oilSelected.borage}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.brazilNut && 'Brazil Nut Oil' }<strong>{oilSelected.brazilNut}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.camelina && 'Camelina Oil' }<strong>{oilSelected.camelina}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.canola && 'Canola Oil' }<strong>{oilSelected.canola}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.castor && 'Castor Oil' }<strong>{oilSelected.castor}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.cherryKernel && 'Cherry Kernel Oil' }<strong>{oilSelected.cherryKernel}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.cottenseed && 'Cotten Seed Oil' }<strong>{oilSelected.cottenseed}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.coconut && 'Coconut Oil' }<strong>{oilSelected.coconut}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.corn && 'Corn Oil' }<strong>{oilSelected.corn}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.cranberrySeed && 'Cranberry Seed Oil' }<strong>{oilSelected.cranberrySeed}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.emu && 'Emu Oil' }<strong>{oilSelected.emu}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.eveningPrimrose && 'Evening Primrose Oil' }<strong>{oilSelected.eveningPrimrose}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.flax && 'Flax Oil' }<strong>{oilSelected.flax}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.grapeSeed && 'Grape Seed Oil' }<strong>{oilSelected.grapeSeed}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.hazelnut && 'Hazelnut Oil' }<strong>{oilSelected.hazelnut}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.illipeButter && 'Illipe Butter' }<strong>{oilSelected.illipeButter}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.jojoba && 'Jojoba Oil' }<strong>{oilSelected.jojoba}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.kiwiSeed && 'Kiwi Seed Oil' }<strong>{oilSelected.kiwiSeed}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.kokumButter && 'Kokum Butter' }<strong>{oilSelected.kokumButter}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.kukuiNut && 'Kukui Nut Oil' }<strong>{oilSelected.kukuiNut}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.lard && 'Lard Oil' }<strong>{oilSelected.lard}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.macadamiaNut && 'Macadamia Nut Oil' }<strong>{oilSelected.macadamiaNut}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.mangoButter && 'Mango Butter' }<strong>{oilSelected.mangoButter}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.mowrahButter && 'Mowrah Butter' }<strong>{oilSelected.mowrahButter}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.neem && 'Neem Oil' }<strong>{oilSelected.neem}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.olive && 'Olive Oil' }<strong>{oilSelected.olive}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.palm && 'Palm Oil' }<strong>{oilSelected.palm}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.palmKernel && 'Palm Kernel Oil' }<strong>{oilSelected.palmKernel}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.peachKernel && 'Peach Kernel Oil' }<strong>{oilSelected.peachKernel}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.peanut && 'Peanut Oil' }<strong>{oilSelected.peanut}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.cocoaButter && 'Cocoa Butter' }<strong>{oilSelected.cocoaButter}</strong></p>
                    <p className="oil-selected">{ oilSelected && oilSelected.marulaOil && 'Marula Oil' }<strong>{oilSelected.marulaOil}</strong></p>
                    <p className="oil-selected">Total Oil: <strong>{totalOil}g</strong></p>            
                </ul>
                <p className="result-paragraph3">Total Batch Size: <strong>
                { 
                        type === "Solid" ? (totalOil + totalAmountOfLyeSolid + totalAmountOfWaterSolid + (fragnance())).toFixed(2) : (totalOil + totalAmountOfLyeLiquid + totalAmountOfWaterLiquid + (fragnance())).toFixed(2)
                    
                    }g
                    </strong>                  
                </p>
            </div>
        )
    }
  
}