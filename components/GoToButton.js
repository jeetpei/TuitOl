import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Login from '../components/Login';
import SignIn from '../components/SignIn';
import Welcome from '../components/Welcome';
import Jitsi from '../components/Jitsi';

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(Jitsi)}
    />
  );
}
