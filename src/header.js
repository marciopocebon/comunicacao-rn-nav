import React from 'react';

import { View, Button } from 'react-native';

const Header = ({ addRepository }) => (
  <View style={{ marginTop: 80 }}>
    <Button 
      onPress={() => addRepository('nome_do_repo')} 
      title="Adicionar" 
    />
  </View>
);

export default Header;
