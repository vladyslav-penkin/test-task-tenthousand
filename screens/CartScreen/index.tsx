import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BasketList } from '../../components/BasketList';
import { EditTemporaryName } from '../../components/EditTemporaryName';
import { BasicBanner } from '../../components/BasicBanner';
import { RootState } from '../../store/store';
import { CartItem } from '../../types/CartItem';
import { MaterialIcons } from '../../types/Icons';

export const CartScreen: FC = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<CartItem | null>(null);
  const [productName, setProductName] = useState<string>('');
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const onAddToEditItem = (item: CartItem) => {
    setShowModal(true);
    setEditItem(item);
  };

  const toggleModal = () => setShowModal(!showModal);

  if (cartItems.length === 0) {
    return (
      <BasicBanner
        title="To see something here, add your products"
        icon={MaterialIcons.EMPTY}
        iconColor={'#16a34a'}
        buttonText="Take me back!"
        onPress={() => navigation.navigate('Home')}
      />
    );
  }

  return (
    <>
      <BasketList cartItems={cartItems} onAddToEditItem={onAddToEditItem} />
      <EditTemporaryName 
        showModal={showModal} 
        toggleModal={toggleModal}
        editItem={editItem}
        setEditItem={setEditItem}
        productName={productName} 
        setProductName={setProductName}
      />
    </>
  );
};