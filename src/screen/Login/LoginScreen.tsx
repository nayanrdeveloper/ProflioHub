import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Input from '@/src/components/common/Input';
import CommonLayout from '@/src/components/layouts/CommonLayouts';
import CommonButton from '@/src/components/common/CommonButton';

export default function LoginScreen() {
    const onchangeEmail = () => {
        console.log('Hello');
    };

    const onHandleLogin = () => {};

    return (
        <CommonLayout>
            <View>
                <Image
                    source={require('../../../assets/images/logo/logo_favicon.png')}
                    style={styles.logo_image}
                />
            </View>
            <View>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    onChangeText={onchangeEmail}
                    value="nayanrdeveloper@gmail.com"
                />
                <Input
                    label="Password"
                    secureTextEntry
                    placeholder="Enter your email"
                    onChangeText={onchangeEmail}
                    value="nayanrdeveloper@gmail.com"
                />
            </View>
            <CommonButton title="Submit" onPress={onHandleLogin} />
        </CommonLayout>
    );
}

const styles = StyleSheet.create({
    logo_image: {
        width: 100,
        height: 100,
    },
});
