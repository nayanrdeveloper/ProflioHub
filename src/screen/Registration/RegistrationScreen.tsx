import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import CommonLayout from '@/src/components/layouts/CommonLayouts';
import Input from '@/src/components/common/Input';
import CommonButton from '@/src/components/common/CommonButton';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/constants/StylesConstant/Colors';
import { authConstant } from '@/src/constants/ScreensConstants/AuthConstant';

export default function RegistrationScreen() {
    const router = useRouter();

    const onchangeEmail = () => {
        console.log('OnChangeEmail is Called!');
    };
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
                        label={authConstant.registration.inputs.fullName.label}
                        placeholder={
                            authConstant.registration.inputs.fullName
                                .placeHolder
                        }
                        onChangeText={onchangeEmail}
                        value="Nayan Radadiya"
                    />
                    <Input
                        label={authConstant.registration.inputs.email.label}
                        placeholder={
                            authConstant.registration.inputs.email.placeHolder
                        }
                        onChangeText={onchangeEmail}
                        value="nayanrdeveloper@gmail.com"
                    />
                    <Input
                        label={authConstant.registration.inputs.password.label}
                        placeholder={
                            authConstant.registration.inputs.password
                                .placeHolder
                        }
                        onChangeText={onchangeEmail}
                        value="******"
                    />
                    <Input
                        label={
                            authConstant.registration.inputs.confirmPassword
                                .label
                        }
                        placeholder={
                            authConstant.registration.inputs.confirmPassword
                                .placeHolder
                        }
                        onChangeText={onchangeEmail}
                        value="******"
                    />
                </View>
                <View>
                    <CommonButton
                        title={authConstant.registration.createAccountBtn}
                        onPress={onchangeEmail}
                    />
                </View>
                <View style={styles.sign_up_label}>
                    <Text style={{}}>
                        {authConstant.registration.alredyRegisterd}
                        <Text
                            onPress={() => router.push('/')}
                            style={styles.sign_up_text}
                        >
                            {' '}
                            {authConstant.registration.signIn}
                        </Text>
                    </Text>
                </View>
            </View>
        </CommonLayout>
    );
}

const styles = StyleSheet.create({
    logo_image: {
        width: 100,
        height: 100,
    },
    sign_up_label: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    sign_up_text: {
        color: Colors.primary,
    },
});
