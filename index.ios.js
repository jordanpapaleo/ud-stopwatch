import React, {
  AppRegistry,
  TouchableHighlight,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

import formatTime from 'minutes-seconds-milliseconds'
import Button from './src/Button.js'

class stopwatch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timeElapsed: null
    }

    this.handleStartPress = this.handleStartPress.bind(this)
  }

  handleStartPress (e) {
    const startTime = new Date()

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      })
    }, 30)
  }

  render() {
    const styles = {
      container: {
        flex: 1,
        alignItems: 'stretch',
      },
      header: [
        {
          flex: 1
        }
      ],
      buttonWrapper: [
        {
          flex: 3, // 3/8th
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }
      ]
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.renderTimer()}
          <View style={styles.buttonWrapper}>
            <Button label='Start' handler={this.handleStartPress} style={{ backgroundColor: 'green' }}/>
            <Button label='Lap' handler={() => { console.log('Lap pressed') }} />
          </View>
        </View>

        {this.renderFooter()}
      </View>
    )
  }

  renderTimer () {
    const { timeElapsed } = this.state
    const styles = {
      flex: 5, // 5/8th
      justifyContent: 'center',
      alignItems: 'center'
    }

    return (
      <View style={styles}>
        <Text style={{fontFamily: 'Cochin', fontSize: 60}}>{timeElapsed ? formatTime(timeElapsed) : '00:00.00' }</Text>
      </View>
    )
  }

  renderFooter () {
    const styles = {
      flex: 1
    }

    return (
      <View style={styles}>
        <Text>List of Laps</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('stopwatch', () => stopwatch);
