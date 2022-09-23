import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../assets/constants";

const FocusedStatusBar = () => {
    const isFocused = useIsFocused()

    return isFocused ? <StatusBar animated={true} backgroundColor={COLORS.black} /> : null
};

export default FocusedStatusBar;