import React,{ useEffect } from 'react';
import { Button, View, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react-native';
// import awsconfig from './src/aws-exports';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
// Amplify.configure(awsconfig);

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
      // phone_number: {
      //   placeholder: 'Phone Number',
      //   isRequired: true,
      //   type: 'tel',
      // },
      name: {
        placeholder: 'Name',
        isRequired: true,
      },
    },
  };

  // useEffect(() => {
  //   Linking.addEventListener('url', handleDeepLink);
  //   return () => {
  //     Linking.removeEventListener('url', handleDeepLink);
  //   };
  // }, []);

  // const handleDeepLink = (event) => {
  //   const { url } = event;
  //   if (url.startsWith('com.anonymous.usermanagement://')) {
  //     const queryString = url.split('?')[1];
  //     const params = new URLSearchParams(queryString);
  //     const code = params.get('code');
  //     const state = params.get('state');
  //     // Handle the deep link based on the parameters
  //   }
  // };

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