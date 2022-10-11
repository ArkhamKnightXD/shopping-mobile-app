import {Text, View} from "react-native";
import useStyles from "./useStyles";

const style = useStyles();

interface HeaderProps {
    title: string;
}

const Header = ({title}: HeaderProps) => {

    return (
        <View style={style.header}>
            <Text style={style.text}>{title}</Text>
        </View>
    );
};

export default Header;
