import React, { Component } from 'react';

import Header from './header';
import { View } from 'react-native';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header {...navigation.state.params} />
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({
      addRepository: this.addRepository,
    });
  }

  addRepository = (repoName) => {
    console.log(repoName);
  }

  render() {
    return (
      <View />
    );
  }
}
