import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from 'react-360';

export default class vr02 extends React.Component {
  // add
constructor(props) {
  super(props)
  this.state = {
    scene: 1,
    click_button: 'please click !!',
  }
}

onClick = () => {
  if (this.state.scene === 1) {
    this.setState({ scene: 2 })
    this.setState({ click_button: 'Next spring stars 01' })
    Environment.setBackgroundImage(asset('VR03-6C.jpg'))

  } else if (this.state.scene === 2) {
    this.setState({ scene: 3 })
    this.setState({ click_button: 'Next spring stars 02' })
    Environment.setBackgroundImage(asset('VR03-6D.jpg'))

  } else if (this.state.scene === 3) {
    this.setState({ scene: 4 })
    this.setState({ click_button: 'Next spring stars 03' })
    Environment.setBackgroundImage(asset('VR03-6E.jpg'))

  } else if (this.state.scene === 4) {
    this.setState({ scene: 5 })
    this.setState({ click_button: 'Next spring stars 04' })
    Environment.setBackgroundImage(asset('VR03-6F.jpg'))

  } else if (this.state.scene === 5) {
    this.setState({ scene: 6 })
    this.setState({ click_button: 'Next spring stars 05' })
    Environment.setBackgroundImage(asset('VR03-6G.jpg'))

  } else if (this.state.scene === 6) {
    this.setState({ scene: 7 })
    this.setState({ click_button: 'Next spring stars 06' })
    Environment.setBackgroundImage(asset('VR03-6H.jpg'))

  } else if (this.state.scene === 7) {
    this.setState({ scene: 8 })
    this.setState({ click_button: 'Next spring stars 07' })
    Environment.setBackgroundImage(asset('VR03-6I.jpg'))

  } else if (this.state.scene === 8) {
    this.setState({ scene: 9 })
    this.setState({ click_button: 'Next spring stars 08' })
    Environment.setBackgroundImage(asset('VR03-6J.jpg'))

  } else if (this.state.scene === 9) {
    this.setState({ scene: 10 })
    this.setState({ click_button: 'Next spring stars 09' })
    Environment.setBackgroundImage(asset('VR03-6K.jpg'))

  } else {
    this.setState({ scene: 1 })
    this.setState({ click_button: 'please click !!' })
    Environment.setBackgroundImage(asset('VR03-6B.jpg'))
  }
}
// end

  render() {
    return (
      <VrButton style={styles.greetingBox} onClick={this.onClick}>
        <Text style={styles.greeting}>{this.state.click_button}</Text>
      </VrButton>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    marginBottom: 400,
    padding: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: '#ffffff',
    borderWidth: 1,
    //transform: translateX[1000],
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('vr02', () => vr02);
