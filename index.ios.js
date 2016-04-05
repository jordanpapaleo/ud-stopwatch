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
import Lap from './src/Lap.js'

class stopwatch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }

    this.handleStartPress = this.handleStartPress.bind(this)
    this.handleLapPress = this.handleLapPress.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  handleLapPress (e) {
    const lap = this.state.timeElapsed

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    })
  }

  handleStartPress (e) {
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({
        running: false,
        laps: []
      })
      return
    }

    this.setState({startTime: new Date()})

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
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
            <Button label='Lap' handler={this.handleLapPress} />
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
        {this.state.laps.map((lap, i) => {
          const lapNumber = i + 1
          return (<Lap time={lap} lapNumber={lapNumber} key={`Lap-${lapNumber}`} />)
        })}
      </View>
    )
  }
}

AppRegistry.registerComponent('stopwatch', () => stopwatch);
