import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class stopwatch extends Component {
  render() {
    const styles = {
      container: {
        flex: 1,
        alignItems: 'stretch',
      },
      header: [
        {
          flex: 1
        },
        this.styleBorder('yellow')
      ]
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.renderTimer()}
          <View style={this.styleBorder('green')}>
            {this.renderStartButton()}
            {this.renderLapButton()}
          </View>
        </View>
        {this.renderFooter()}
      </View>
    )
  }

  renderTimer () {
    const styles = [
      this.styleBorder('red')
    ]

    return (
      <View style={styles}>
        <Text>00:00.0</Text>
      </View>
    )
  }

  renderStartButton () {
    const styles = {

    }

    return (
      <View>
        <Text>Start</Text>
      </View>
    )
  }

  renderLapButton () {
    return (
      <View>
        <Text>Lap</Text>
      </View>
    )
  }

  renderFooter () {
    const styles = [
      {
        flex: 1
      },
      this.styleBorder('blue')
    ]

    return (
      <View style={styles}>
        <Text>List of Laps</Text>
      </View>
    )
  }

  styleBorder (color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
}

AppRegistry.registerComponent('stopwatch', () => stopwatch);
