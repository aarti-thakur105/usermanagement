import React from 'react';
import { Button, View, StyleSheet, SafeAreaView } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const App = () => {
  const formFields = {
    signUp: {
      username: {
        placeholder: 'Username',
        isRequired: true,
      },
      password: {
        placeholder: 'Password',
        isRequired: true,
      },
      email: {
        placeholder: 'Email',
        isRequired: true,
        type: 'email',
      },
      phone_number: {
        placeholder: 'Phone Number',
        isRequired: true,
        type: 'tel',
      },
      name: {
        placeholder: 'Name',
        isRequired: true,
      },
    },
  };

  return (
    <Authenticator.Provider>
      <Authenticator formFields={formFields}>
        <SafeAreaView>
          <SignOutButton />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: 'flex-end',
  },
  signInButton: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default withAuthenticator(App);
