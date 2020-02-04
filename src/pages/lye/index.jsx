import React from "react"
import "./lye.css"
import Ingredient from "../../component/ingredient"
import PropTypes from 'prop-types'

class Lye extends React.Component {
    constructor() {
        super()
        this.state = {
            type: "",
            measure: "",
            level: "",
            fragrance: "",
            isFilled: false,
            isIngredient: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleResult = this.handleResult.bind(this)
    }
    handleClick(e) {
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    handleResult(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isIngredient: !prevState.isIngredient,
            isFilled: !prevState.isFilled
        }))
            
    }

    render() {
        const { type, measure, level, fragrance, isFilled} = this.state

        return (
            <div className="lye">
                <h1 className="lye-header">Calculators</h1>
               
                <p className="lye-paragraph">Calculate your lye or fragrance amounts for the perfect batch!</p>
                <div className="btn">
                    <button className="lye-btn1">LYE CALCULATOR</button>
                   
                </div>
                <h2 className="lye-header2">Lye Calculator</h2>
                <div className="lye-div2">
                    <p className="lye-paragraph2">Calculating the amount of lye you need for your next soap recipe is as easy as 1-2-3</p>
                    <p className="lye-paragraph2">*Please note: The Genesis formulab Lye Calculator assumes a 90% 
                        purity for Potassium Hydroxide (liquid soapmaking) and 97%
                        purity for Sodium Hydroxide (solid bar soapmaking). These 
                        purity levels are what are commonly available for sale to 
                        consumers, including the lye sold at Genesis formulab.
                    </p>
                </div>
                
                <form className="form">
                    <div className="form-div">
                        <p>CHOOSE YOUR SOAP TYPE AND MEASUREMENT UNITS.</p>
                        <div className="type-div">
                                {
                                type === "" ? <p className="required">Required</p> : ''
                                }
                            <select name="type" value={type} onChange={this.handleClick} className="select1" required>
                                <option value="">Type</option>
                                <option value="Solid">Solid</option>
                                <option value="Liquid">Liquid</option>
                            </select>
                        </div>
                        <br />
                        <div className="type-div2">
                            {
                                measure === "" ? <p className="required2">Required</p> : ''
                            }
                            <select name="measure" value={measure} onChange={this.handleClick} className="select2" required>
                                <option value="">Please select measurement in Grams</option>
                                <option value="Grams">Grams</option>
                            </select>
                        </div>
                        <div className="type-div3">
                            {
                                level === "" ? <p className="required3">Required</p> : ''
                            }
                            <select name="level" value={level} onChange={this.handleClick} className="select3" required>
                                <option value="">Superfatting Level( In %)</option>
                                <option value="none">None</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <div className="type-div4">
                            {
                                fragrance === "" ? <p className="required2">Required</p> : ''
                            }
                            <select name="fragrance" value={fragrance} onChange={this.handleClick} className="select2" required>
                                <option value="">Fragrance Strength</option>
                                <option value="Light">Light</option>
                                <option value="Medium">Medium</option>
                                <option value="Strong">Strong</option>
                            </select>
                        </div>
                        </div>
                        
                        
                        <br />
                        <br />
                        
                        {
                            !isFilled || type === '' || measure === '' || level === '' || fragrance === '' ? <button className="lye-btn1" onClick={this.handleResult}>NEXT</button> : ""
                        }
                        

                        {
                            this.state.isIngredient && type !== '' && measure !== '' && level !== '' && fragrance !== '' ?
                                <div>
                                     <Ingredient 
                                        level={level}
                                        type={type}
                                        measure={measure}
                                        fragrance={fragrance}
                                    />
                                   
                                </div> : ""
                            
                        }
                    </div>
                    
                </form>
            
            </div>
        )
    }
    
}

Lye.propTypes = {
    profileProp: PropTypes.shape({
        type: PropTypes.oneOfType(['solid', 'liquid']).isRequired,
        measure: PropTypes.oneOf(['ounce', 'grams']).isRequired,
    })
}

export default Lye