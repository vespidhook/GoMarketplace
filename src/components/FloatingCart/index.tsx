import React, { useMemo } from 'react';

import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

import formatValue from '../../utils/formatValue';

import { useCart } from '../../hooks/cart';

const FloatingCart: React.FC = () => {
  const { products } = useCart();

  const navigation = useNavigation();

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      const total = accumulator + product.price * product.quantity;

      return total;
    }, 0);

    return formatValue(cartAmount);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const cartItems = products.reduce((accumulator, product) => {
      const total = accumulator + product.quantity;

      return total;
    }, 0);

    return cartItems;
  }, [products]);

  return (
    <Container>
      <CartButton
        testID="navigate-to-cart-button"
        onPress={() => navigation.navigate('Cart')}
      >
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>

        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
