import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors'; ///////////
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount, hidden }) => (
  <div className='cart-icon' onClick={hidden ? toggleCartHidden : null}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden, ///// hidden added by dessi
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
