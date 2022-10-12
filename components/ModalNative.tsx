import {Pressable, View, Text, Modal, TextInput} from "react-native";
import useModalStyle from "./useModalStyle";
import {Item} from "../App";
import {useState} from "react";
import useStyles from "./useStyles";

const style = useModalStyle();
const styles = useStyles();

interface ModalNativeProps {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
    actualItem: Item;
    items: Item[];
    setItems: (value: Item[]) => void;
}

const ModalNative = ({isModalVisible, setIsModalVisible, actualItem, items, setItems}: ModalNativeProps) => {

    const [text, setText] = useState('');


    const handleChangeText = (textValue: string) => {

        setText(textValue);
    };


    const getActualItem = (actualId: number): Item | undefined => {

         return items.find(item => item.id == actualId);
    };


    const handleAddPrice = (actualPrice: number) => {

        // let item = getActualItem(actualItem.id);

        items.map((item)=> {

            if(item.id == actualItem.id)
                item.price = actualPrice;
        })

        // item.price = price;

        setIsModalVisible(false);
    };

    return (
        <View style={style.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(!isModalVisible)}>

                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <TextInput placeholder="Add Item..." style={styles.input}
                                   onChangeText={handleChangeText} value={text}/>

                        <Text style={style.modalText}>{actualItem.text} - price: {actualItem.price}</Text>
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => getActualItem(actualItem.id)}>
                            <Text style={style.textStyle}>OK</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalNative;
