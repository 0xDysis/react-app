import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically validate the user's credentials and handle the login process
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder={'Username'}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button
        title={'Login'}
        onPress={handleLogin}
      />
    </View>
  );
}

export default Login;
