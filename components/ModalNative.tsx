import {Pressable, View, Text, Modal} from "react-native";
import useModalStyle from "./useModalStyle";
import {Item} from "../App";

const styles = useModalStyle();

interface ModalNativeProps {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
    actualItem: Item;
}

const ModalNative = ({isModalVisible, setIsModalVisible, actualItem}: ModalNativeProps) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(!isModalVisible)}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{actualItem.text}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setIsModalVisible(!isModalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalNative;
