import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Input from '@/src/components/common/Input';
import CommonLayout from '@/src/components/layouts/CommonLayouts';
import CommonButton from '@/src/components/common/CommonButton';

import { useRouter } from 'expo-router';
import { Colors } from '@/src/constants/StylesConstant/Colors';
import { authConstant } from '@/src/constants/ScreensConstants/AuthConstant';

export default function LoginScreen() {
    const onchangeEmail = () => {
        console.log('Hello');
    };

    const onHandleLogin = () => {};
    const router = useRouter();

    return (
        <CommonLayout>
            <View>
                <View>
                    <Image
                        source={require('../../../assets/images/logo/logo_favicon.png')}
                        style={styles.logo_image}
                    />
                </View>
                <View>
                    <Input
                        label={authConstant.login.inputs.email.label}
                        placeholder={
                            authConstant.login.inputs.email.placeHolder
                        }
                        onChangeText={onchangeEmail}
                        value="nayanrdeveloper@gmail.com"
                    />
                    <Input
                        label={authConstant.login.inputs.password.label}
                        secureTextEntry
                        placeholder={
                            authConstant.login.inputs.password.placeHolder
                        }
                        onChangeText={onchangeEmail}
                        value="nayanrdeveloper@gmail.com"
                        isFocused={true}
                    />
                </View>

                <CommonButton
                    title={authConstant.login.loginButton}
                    onPress={onHandleLogin}
                />

                <View style={styles.sign_up_label}>
                    <Text style={{}}>
                        {authConstant.login.noAccount}
                        <Text
                            onPress={() => router.push('/registration')}
                            style={styles.sign_up_text}
                        >
                            {' '}
                            {authConstant.login.signUp}
                        </Text>
                    </Text>
                </View>
            </View>
        </CommonLayout>
    );
}

const styles = StyleSheet.create({
    sign_up_label: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    sign_up_text: {
        color: Colors.primary,
    },
    logo_image: {
        width: 100,
        height: 100,
    },
});
