import React, { Component } from 'react';
import Product from './Product.jsx';
import Title from './Title.jsx';
import {storeProducts} from '../data.js';
import {ProductConsumer} from '../context.js';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products"/>

            <div className="row">
                <ProductConsumer>
                  {(value) => { 
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />
                    });
                  }}
                </ProductConsumer>
            </div> 
          </div>
        </div>
      </React.Fragment>
    )
  }
}
