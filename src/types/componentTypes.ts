import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';

export interface InputProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    error?: string;
}

export interface ButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    borderRadius?: number;
    style?: ViewStyle;
    textStyle?: TextStyle;
}
