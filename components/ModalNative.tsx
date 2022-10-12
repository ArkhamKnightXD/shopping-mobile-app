import {Pressable, View, Text, Modal, TextInput} from "react-native";
import useModalStyle from "./useModalStyle";
import {Item} from "../App";
import {useEffect, useState} from "react";
import useGeneralStyles from "./useGeneralStyles";
import axios from "axios";

const style = useModalStyle();
const styles = useGeneralStyles();

interface ModalNativeProps {

    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
    actualItem: Item;
    setItems: (value: Item[]) => void;
}

const URL = "http://localhost:88";

const ModalNative = ({isModalVisible, setIsModalVisible, actualItem, setItems}: ModalNativeProps) => {

    const [name, setName] = useState("");
    const [sellPrice, setSellPrice] = useState("0");


    useEffect(() => {

        if(isModalVisible){

            setName(actualItem.name);
            setSellPrice(actualItem.sellPrice.toString());
        }

    }, [isModalVisible]);



    const handleChangeName = (name: string) => {

        setName(name);
    };


    const handleChangePrice = (price: string) => {

        setSellPrice(price);
    };


    const handleAddPrice = () => {

        const updatedItem: Item = {id: actualItem.id, name,  sellPrice: parseInt(sellPrice)};

        axios.put(`${URL}/api/v1/video-games`, updatedItem).then(response => {

            setItems(response.data);
        });

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

                        <TextInput placeholder="name..." style={styles.input}
                                   onChangeText={handleChangeName} value={name}/>

                        <TextInput placeholder="price..." style={styles.input}
                                   onChangeText={handleChangePrice} value={sellPrice}/>

                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => handleAddPrice()}>
                            <Text style={style.textStyle}>OK</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalNative;
