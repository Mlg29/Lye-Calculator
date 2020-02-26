import React from "react"
import "./ingredient.css"
import Result from "../Result"


class Ingredient extends React.Component {
    
        state = {
            isLoading: false,
            isImage: true,
            sweetalmond: "",
            aloeVera: "",
            apricot: "",
            avocado: "",
            babassu: "",
            baobab: "",
            blackCumin: "", 
            blackCurrant: "", 
            borage: "", 
            brazilNut: "",
            camelina: "", 
            canola: "", 
            castor: "", 
            cherryKernel: "", 
            cottenseed: "", 
            cocoaButter: "", 
            coconut: "", 
            corn: "", 
            cranberrySeed: "", 
            emu: "", 
            eveningPrimrose: "", 
            flax: "", 
            grapeSeed: "", 
            hazelnut: "", 
            illipeButter: "", 
            jojoba: "", 
            kiwiSeed: "", 
            kokumButter: "", 
            kukuiNut: "", 
            lard: "", 
            macadamiaNut: "", 
            mangoButter: "", 
            marulaOil: "", 
            mowrahButter: "", 
            neem: "", 
            olive: "", 
            palm: "", 
            palmKernel: "", 
            peachKernel: "", 
            peanut: ""
            
        }
       
    
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({[name]: value})
    }
    loading = (e) => {
        e.preventDefault()
        this.setState({isImage: false})
        setTimeout(() => {
            this.setState({isLoading: true})
           
        }, 4000)    
        
    }
    render() {
        const {level, type, measure, fragrance } = this.props

        const { isLoading, isImage, aloeVera, apricot, avocado, babassu, baobab, 

            blackCumin, blackCurrant, borage, brazilNut,camelina, canola, castor, cherryKernel,
             cottenseed, cocoaButter, coconut, corn, cranberrySeed, emu, eveningPrimrose, flax,
              grapeSeed, hazelnut, illipeButter, jojoba, kiwiSeed, kokumButter, kukuiNut, lard, 
              macadamiaNut, mangoButter, marulaOil, mowrahButter, neem, olive, palm, palmKernel, peachKernel, peanut, sweetalmond,} = this.state

        const totalAmountOfLyeSolid = (sweetalmond * 0.137 ) + (aloeVera * 0.135) + (apricot * 0.135 ) + (avocado * 0.133 ) + (babassu * 0.178) + (baobab * 0.143) + (blackCumin * 0.129) + (blackCurrant * 0.134) + (borage * 0.134) + (brazilNut * 0.136) + (camelina * 0.134) + (canola * 0.137) + (castor * 0.128) + (cherryKernel * 0.135) + (cottenseed * 0.137) + (cocoaButter * 0.136) + (coconut * 0.178) + (corn * 0.135) + (cranberrySeed * 0.135) + (emu * 0.135) + (eveningPrimrose * 0.133) + (flax * 0.137) + (grapeSeed * 0.133) + (hazelnut * 0.138) + (illipeButter * 0.132) + (jojoba * 0.068) + (kiwiSeed * 0.132) + (kokumButter * 0.135) + (kukuiNut * 0.137) + (lard * 0.139) + (macadamiaNut * 0.138) + (mangoButter * 0.135) + (marulaOil * 0.135) + (mowrahButter * 0.138) + (neem * 0.142) + (olive * 0.135) + (palm * 0.144) + (palmKernel * 0.169) + (peanut * 0.139) 
        const totalAmountOfWaterSolid = (totalAmountOfLyeSolid / 0.3) - totalAmountOfLyeSolid
        const superfattingValueSolid = totalAmountOfLyeSolid * (1 - (level / 100))
        
        const totalAmountOfLyeLiquid = (sweetalmond * 0.194 ) + (aloeVera * 0.190) + (apricot * 0.190 ) + (avocado * 0.188 ) + (babassu * 0.251) + (baobab * 0.202) + (blackCumin * 0.193) + (blackCurrant * 0.188) + (borage * 0.189) + (brazilNut * 0.192) + (camelina * 0.188) + (canola * 0.192) + (castor * 0.180) + (cherryKernel * 0.190) + (cottenseed * 0.194) + (cocoaButter * 0.191) + (coconut * 0.251) + (corn * 0.190) + (cranberrySeed * 0.190) + (emu * 0.192) + (eveningPrimrose * 0.188) + (flax * 0.192) + (grapeSeed * 0.187) + (hazelnut * 0.193) + (illipeButter * 0.185) + (jojoba * 0.096) + (kiwiSeed * 0.207) + (kokumButter * 0.190) + (kukuiNut * 0.192) + (lard * 0.195) + (macadamiaNut * 0.195) + (mangoButter * 0.190) + (marulaOil * 0.190) + (mowrahButter * 0.194) + (neem * 0.200) + (olive * 0.190) + (palm * 0.203) + (palmKernel * 0.238) + (peanut * 0.190) 
        const totalAmountOfWaterLiquid = (totalAmountOfLyeLiquid / 0.3) - totalAmountOfLyeLiquid
        const superfattingValueLiquid = totalAmountOfLyeLiquid * (1 - (level / 100))
        

        const totalOil = (sweetalmond * 1) + (aloeVera * 1) + (apricot * 1 ) + (avocado * 1 ) + (babassu * 1) + (baobab * 1) + (blackCumin * 1) + (blackCurrant * 1) + (borage * 1) + (brazilNut * 1) + (camelina * 1) + (canola * 1) + (castor * 1) + (cherryKernel * 1) + (cottenseed * 1) + (cocoaButter * 1) + (coconut * 1) + (corn * 1) + (cranberrySeed * 1) + (emu * 1) + (eveningPrimrose * 1) + (flax * 1) + (grapeSeed *1) + (hazelnut * 1) + (illipeButter * 1) + (jojoba * 1) + (kiwiSeed * 1) + (kokumButter * 1) + (kukuiNut * 1) + (lard * 1) + (macadamiaNut * 1) + (mangoButter * 1) + (marulaOil * 1) + (mowrahButter * 1) + (neem * 1) + (olive * 1) + (palm * 1) + (peachKernel * 1) + (palmKernel * 1) + (peanut * 1) 
        const oilSelected = this.state

        return (
            <div className="ingredient">
                
                <h1 className="ingred">INGREDIENTS</h1>

                <p className="ingred-paragraph">What are your Oil ingredient amounts by weight (measured in grams)</p>

                
                    <div className="ingredient-div">
                      <div className="ingredient-div-div"><label className="label">Aloe Vera Oil</label><input name="aloeVera" value={aloeVera} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                      <div className="ingredient-div-div"><label className="label">Apricot Kernel Oil</label><input name="apricot" value={apricot} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                       
                    </div>
                   <div className="ingredient-div">
                       <div className="ingredient-div-div"><label className="label">Avocado Oil</label><input name="avocado" value={avocado} onChange={this.handleChange} className="ingredient-input1" type="text" /></div> 
                       <div className="ingredient-div-div"><label className="label">Babassu Oil</label><input name="babassu" value={babassu} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                        
                    </div>
                    <div className="ingredient-div">
                        <div className="ingredient-div-div"><label className="label">Baobab Oil</label><input name="baobab" value={baobab} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>                
                        <div className="ingredient-div-div"><label className="label">Black Cumin Oil</label><input  name="blackCumin" value={blackCumin} onChange={this.handleChange} className="ingredient-input1"  type="text" /></div>
                                      
                    </div>
                                    <div className="ingredient-div">

                                          <div className="ingredient-div-div"><label className="label">Blackcurrant Oil</label><input  name="blackCurrant" value={blackCurrant} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                          <div className="ingredient-div-div"><label className="label">Borage Oil</label><input  name="borage" value={borage} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                       
                                        
                                    </div>
                                    <div className="ingredient-div">
                                        <div className="ingredient-div-div"><label className="label">Brazil Nut Oil</label><input  name="brazilNut" value={brazilNut} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        <div className="ingredient-div-div"><label className="label">Camelina Oil</label><input  name="camelina" value={camelina} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                      

                                        
                                    </div>
                                    <div className="ingredient-div">
                                          <div className="ingredient-div-div"> <label className="label">Canola Oil</label><input  name="canola" value={canola} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                          <div className="ingredient-div-div"><label className="label">Castor Oil</label><input  name="castor" value={castor} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                     
                                       
                                    </div>
                                    <div className="ingredient-div">
                                           <div className="ingredient-div-div"> <label className="label">Cherry Kernel Oil</label><input  name="cherryKernel" value={cherryKernel} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                           <div className="ingredient-div-div"> <label className="label">Cottonseed Oil</label><input  name="cottenseed" value={cottenseed} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                      
                                       
                                    </div>
                                    <div className="ingredient-div">
                                          <div className="ingredient-div-div"><label className="label">Cocoa Butter</label><input  name="cocoaButter" value={cocoaButter} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                          <div className="ingredient-div-div"><label className="label">Coconut Oil</label><input  name="coconut" value={coconut} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                      
                                        
                                    </div>
                                    <div className="ingredient-div">
                                          <div className="ingredient-div-div"><label className="label">Corn Oil</label><input  name="corn" value={corn} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                          <div className="ingredient-div-div"><label className="label">Cranberry Seed Oil</label><input  name="cranberrySeed" value={cranberrySeed} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        
                                       
                                    </div>
                                    <div className="ingredient-div">
                                        <div className="ingredient-div-div"><label className="label">Emu Oil</label><input  name="emu" value={emu} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>   
                                        <div className="ingredient-div-div"><label className="label">Evening Primrose Oil</label><input  name="eveningPrimrose" value={eveningPrimrose} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        
                                    </div>
                                    <div className="ingredient-div">
                                        <div className="ingredient-div-div"><label className="label">Flax/Linseed Oil</label><input  name="flax" value={flax} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        <div className="ingredient-div-div"><label className="label">Grapeseed Oil</label><input  name="grapeSeed" value={grapeSeed} onChange={this.handleChange} className="ingredient-input1" type="text" /></div> 
                                        
                                    </div>
                                    <div className="ingredient-div">
                                       <div className="ingredient-div-div"><label className="label">Hazelnut Oil</label><input  name="hazelnut" value={hazelnut} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        <div className="ingredient-div-div"><label className="label">Illipe Butter</label><input  name="illipeButter" value={illipeButter} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                       
                                        
                                    </div>
                                    <div className="ingredient-div">
                                         <div className="ingredient-div-div"><label className="label">Jojoba Oil</label><input  name="jojoba" value={jojoba} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                         <div className="ingredient-div-div"> <label className="label">Kiwi Seed Oil</label><input  name="kiwiSeed" value={kiwiSeed} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                      
                                        
                                    </div>
                                    <div className="ingredient-div">
                                         <div className="ingredient-div-div"><label className="label">Kokum Butter</label><input  name="kokumButter" value={kokumButter} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                         <div className="ingredient-div-div"><label className="label">Kukui Nut Oil</label><input  name="kukuiNut" value={kukuiNut} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        
                                        
                                    </div>
                                    <div className="ingredient-div">
                                       <div className="ingredient-div-div"> <label className="label">Lard Oil</label><input  name="lard" value={lard} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                       <div className="ingredient-div-div"><label className="label">Macadamia Nut Oil</label><input  name="macadamiaNut" value={macadamiaNut} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                      
                                       
                                    </div>
                                    <div className="ingredient-div">
                                          <div className="ingredient-div-div"><label className="label">Mango Butter</label><input  name="mangoButter" value={mangoButter} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                          <div className="ingredient-div-div"><label className="label">Marula Oil</label><input  name="marulaOil" value={marulaOil} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                       
                                        
                                    </div>
                                    <div className="ingredient-div">
                                         <div className="ingredient-div-div"><label className="label">Mowrah Butter</label><input  name="mowrahButter" value={mowrahButter} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                         <div className="ingredient-div-div"><label className="label">Neem Oil</label><input  name="neem" value={neem} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                       
                                       
                                    </div>
                                    <div className="ingredient-div">
                                         <div className="ingredient-div-div"><label className="label">Olive Oil</label><input  name="olive" value={olive} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                         <div className="ingredient-div-div"><label className="label">Palm Oil</label><input  name="palm" value={palm} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        
                                        
                                    </div>
                                    <div className="ingredient-div">
                                        <div className="ingredient-div-div"><label className="label">Palm Kernel Oil</label><input  name="palmKernel" value={palmKernel} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        <div className="ingredient-div-div"><label className="label">Peach Kernel Oil</label><input  name="peachKernel" value={peachKernel} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>
                                        
                                        
                                    </div>
                                    <div className="ingredient-div">
                                        <div className="ingredient-div-div"><label className="label">Peanut Oil</label><input  name="peanut" value={peanut} onChange={this.handleChange} className="ingredient-input1" type="text" /></div>   
                                        <div className="ingredient-div-div"><label className="label">Sweet Almond Oil</label><input name="sweetalmond" value={sweetalmond} onChange={this.handleChange} className="ingredient-input1" type="text"/></div>
                                  
                                    </div>
                                
                                   
                    <div className="ingredient-button">
                        <button onClick={this.loading} className="lye-btn1">CALCULATE LYE</button>
                        
                    </div>
                    {
                        isLoading ?  
                           
                          <div  className="try2">
                              <div  className="try2">
                                <Result 
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
                          </div> 
                          :   isImage ? '' :
                          <div className="try1">
                            <img id="image" className="images" src="https://res.cloudinary.com/dn6ni2rlg/image/upload/v1582219597/Spinner-0.6s-200px_a6dwav.gif" alt="gif loading" />
                         </div>
                        
                      
                      
                    }
                    
                    
                     
                    
            </div>
        )
    }
    
}

export default Ingredient