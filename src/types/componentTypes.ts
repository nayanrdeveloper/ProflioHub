import { ViewStyle, TextStyle } from 'react-native';

export interface InputProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    error?: string;
    isFocused?: boolean;
    keyboardType?: 'default' | 'numeric';
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
