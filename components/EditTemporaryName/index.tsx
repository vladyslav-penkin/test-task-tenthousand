import { FC } from 'react';
import {
  Modal,
  Button,
  ButtonText,
  Text,
  CloseIcon,
  Heading,
  Icon,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input,
  InputField
} from '@gluestack-ui/themed';
import { CartItem } from '../../types/CartItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { updateCartItemTemporaryName } from '../../store/slices/cartSlice';

interface Props {
  showModal: boolean;
  toggleModal: () => void;
  editItem: CartItem | null;
  setEditItem: React.Dispatch<React.SetStateAction<CartItem | null>>;
  productName: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
}

export const EditTemporaryName: FC<Props> = ({ showModal, productName, editItem, setProductName, toggleModal, setEditItem }) => {
  const isDisabled = productName.length === 0;
  const dispatch = useAppDispatch();
  const handleReset = () => {
    setEditItem(null);
    setProductName('');
    toggleModal();
  };
  const handleSubmit = () => {
    if (editItem) {
      dispatch(updateCartItemTemporaryName({ id: editItem.id, temporaryName: productName }));
    }
    handleReset();
  };

  return (
    <Modal
      w="100%"
      h="100%"
      isOpen={showModal}
      onClose={toggleModal}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Edit "{editItem?.temporaryName}" name</Heading>
          <ModalCloseButton onPress={handleReset}>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Please enter the new name for your product</Text>

          <Input variant="outline" marginTop={10}>
            <InputField 
              type="text"
              value={productName}
              onChangeText={(text) => setProductName(text)}
              placeholder="Enter Text here"
            />
          </Input>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            action="negative"
            size="sm"
            mr="$3"
            onPress={handleReset}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            opacity={isDisabled ? '$70' : '$100'}
            disabled={isDisabled}
            action="positive"
            borderWidth="$0"
            onPress={handleSubmit}
          >
            <ButtonText>Submit</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};