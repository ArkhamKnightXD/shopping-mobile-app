import {StyleSheet} from "react-native";

const useGeneralStyles = () => {

    return StyleSheet.create({

        input: {
            height: 40,
            padding: 5,
            margin: 5
        },

        btn: {
            backgroundColor: '#060618',
            padding: 10,
            margin: 5,
            borderRadius: 10
        },

        btnText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
        },

        listItem: {
            padding: 10,
            margin: 5,
            backgroundColor: '#eae4e4',
            borderBottomWidth: 1,
            borderColor: '#eee',
            borderRadius: 10
        },

        listItemView: {

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },

        listItemText: {

            fontSize: 20
        },

        header: {
            height: 60,
            paddingTop: 32,
            backgroundColor: "#010106"
        },

        text: {

            color: "#fff",
            fontSize: 20,
            textAlign: "center"
        }
    });
};

export default useGeneralStyles;


