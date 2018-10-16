import React from "react"
import { exVatToIncVat, incVatToExtVat, vatToIncVat } from "../calculations"

class App extends React.Component {
  state = {
    vatRate: 25,
    incVat: 0,
    exVat: 0
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="text">
            <span>Räkna ut momsen</span>
          </div>
          <div className="inside-text">
            <p>Räkna ut vad momsen blir (6, 12 eller 25 procent) med vår kalkylator. Välj momssats
             och du ser vad summan blir exklusive eller inklusive moms.</p>
          </div>
          <div className="radio-buttons">
            <input type="radio" name="vat" value={25} onChange={this.onPercentageChange}/> 25% <br/>
            <input type="radio" name="vat" value={12} onChange={this.onPercentageChange}/> 12% <br/>
            <input type="radio" name="vat" value={6} onChange={this.onPercentageChange}/> 6% <br/>
          </div>
          <div className="input-container">
            <span>Inklusive moms (kr)</span>
            <div>
               <input type="text" name="Inklusive" placeholder="0" value={this.state.incVat} onChange={this.onIncVatChange}/><br/>
            </div>
            <span>Exklusive moms (kr)</span>
            <div>
                <input type="text" name="Exklusive" placeholder="0" value={this.state.exVat} onChange={this.onExVatChange}/><br/>
            </div>
            <span>Momssumma (kr)</span>
            <div>
               <input type="text" name="Momssumma" placeholder="0" value={this.state.incVat - this.state.exVat} onChange={this.onVatChange} /><br/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onIncVatChange = (event) => {
    this.setState({
      incVat: event.target.value,
      exVat: incVatToExtVat(this.state.vatRate, event.target.value)
    })

  }

  onExVatChange = (event) => {
    this.setState({
      exVat: event.target.value,
      incVat: exVatToIncVat(this.state.vatRate, event.target.value)
    })

  }

  onVatChange = (event) => {
    const incVat = vatToIncVat(this.state.vatRate, event.target.value)
    console.log(incVat)
    this.setState({
      incVat: incVat,
      exVat: incVatToExtVat(this.state.vatRate, incVat)
    })

  }

onPercentageChange = (event) => {
  this.setState({
    vatRate: event.target.value,
    exVat: incVatToExtVat(event.target.value, this.state.incVat)
  })

}



}

export default App
