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
      timeElapsed: null,
      running: false
    }

    this.handleStartPress = this.handleStartPress.bind(this)
  }

  handleStartPress (e) {
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({
        running: false
      })
      return
    }

    const startTime = new Date()

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
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
            <Button label={ (this.state.running) ? 'Stop' : 'Start' } handler={this.handleStartPress} style={{ backgroundColor: (this.state.running) ? 'red' : 'green' }}/>
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
        <Text style={{fontFamily: 'Cochin', fontSize: 60}}>{formatTime(timeElapsed)}</Text>
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
