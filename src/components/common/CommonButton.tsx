import { Colors } from '@/src/constants/StylesConstant/Colors';
import { ButtonProps } from '@/src/types';
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';

const CommonButton = ({
    title,
    onPress,
    backgroundColor = Colors.primary,
    borderColor = 'transparent',
    borderRadius = 10,
    textColor = Colors.white,
    style,
    textStyle,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                { backgroundColor, borderColor, borderRadius },
                style,
            ]}
        >
            <Text style={[styles.text, { color: textColor }, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CommonButton;
