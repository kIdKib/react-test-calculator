import React, { Component } from 'react';


class Calculatrice extends Component {
    state = { 
        items: "",
        resultat: 0
    } 

    handleChange = (e) =>{
        this.setState({ input: Number(e.target.value) })
    }

    addition = () =>{
        let valeur = this.state.input + this.state.resultat
        this.setState({resultat: valeur})
    }

    soustraction =() =>{
        let valeu = this.state.resultat - this.state.input
        this.setState({resultat: valeu})
    }


    render() { 
        return (
            <div>
                <form>
                    <h1>{this.state.resultat}</h1>
                    <input type="text" name="" id="" onChange={(e) => this.handleChange(e)}/>
                    <button onClick={(e) => {e.preventDefault(); this.addition(e)}}>+++++++</button>
                    <button onClick={(e) => {e.preventDefault(); this.soustraction(e)}}>---------</button>
                    <h1></h1>
                </form>
            </div>
        );
    }
}
 
export default Calculatrice;