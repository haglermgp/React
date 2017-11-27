import React from 'react'
import { connect } from 'react-redux'
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap'

// import store from '../store'

import action from '../actionCreators.js'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({cart, removeFromCart}) => {

  return (
    <Panel header="Shopping Cart">
      <Table fill>
        <tbody>
          {cart.map((product, index) =>
            <tr key={index}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product,index)}><Glyphicon glyph="trash" /></Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Panel>
  )

}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product, index) {
      // store.dispatch(action.removeFromCart(product))
      dispatch(action.removeFromCart(product, index))
    }
  }
}

const mapStateToProps = state => {
  return {
    // este estado es compartido de redux
    cart: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
