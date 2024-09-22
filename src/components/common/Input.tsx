import { Colors } from '@/src/constants/Colors';
import { InputProps } from '@/src/types';
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    error,
    isFocused,
    keyboardType = 'default',
}: InputProps) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[
                    styles.input,
                    isFocused && {
                        borderColor: Colors.primary,
                        shadowColor: Colors.primaryLight,
                        elevation: 5,
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 5,
                    },
                    error ? styles.inputError : null,
                ]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#aaa"
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={keyboardType}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
});

export default Input;
