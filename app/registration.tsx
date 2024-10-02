import { View, Text } from 'react-native';
import React from 'react';
import RegistrationScreen from '@/src/screen/Registration/RegistrationScreen';

export default function Registration() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <RegistrationScreen />
        </View>
    );
}
