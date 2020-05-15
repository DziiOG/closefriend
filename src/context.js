import React, { Component } from 'react'


const ProductContext = React.createContext();

 class ProductProvider extends Component {

    state = {
        autoFocus: false
    }


    changeFocus= () => {
        //console.log(this.state.autoFocus)
        if(this.state.autoFocus == false) {
            this.setState({
                autoFocus: true
            })
            console.log(this.state.autoFocus)
        }else {
            this.setState({
                autoFocus: false
            })
            console.log(this.state.autoFocus)
        }
    }


    render() {
        return (
           <ProductContext.Provider
           value={{...this.state,
            changeFocus: this.changeFocus
           
           }}
           >
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}
