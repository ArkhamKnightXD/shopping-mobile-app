import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import useStyles from "./useStyles";
// @ts-ignore
import Entypo from "react-native-vector-icons/Entypo";

const style = useStyles();

interface AddItemProps {
    addItem: (text: string) => void;
}

const AddItem = ({addItem}: AddItemProps) => {

    const [text, setText] = useState('');


    const handleChangeText = (textValue: string) => {

        setText(textValue);
    };


    return (
        <View>

            <TextInput
                placeholder="Add Item..."
                style={style.input}
                onChangeText={handleChangeText}
                value={text}
            />
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}>
                <Text style={style.btnText}>
                    <Entypo name="plus" size={24} color="black"/> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};


export default AddItem;
