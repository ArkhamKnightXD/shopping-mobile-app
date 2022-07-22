import {StyleSheet} from "react-native";

const useStyles = () => {

    return StyleSheet.create({

        input: {
            height: 60,
            padding: 8,
            margin: 5,
        },
        btn: {
            backgroundColor: '#c2bad8',
            padding: 9,
            margin: 5,
        },
        btnText: {
            color: 'darkslateblue',
            fontSize: 20,
            textAlign: 'center',
        },

        listItem: {
            padding: 15,
            backgroundColor: '#f8f8f8',
            borderBottomWidth: 1,
            borderColor: '#eee'
        },

        listItemView: {

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },

        listItemText: {

            fontSize: 18
        },

        header: {
            height: 60,
            padding: 15,
            backgroundColor: "#252590"
        },

        text: {

            color: "#fff",
            fontSize: 23,
            textAlign: "center"
        }
    });
};

export default useStyles;


