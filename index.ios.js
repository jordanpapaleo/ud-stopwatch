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
      header: {
        flex: 1
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.renderTimer()}
          <View>
            {this.renderStartButton()}
            {this.renderLapButton()}
          </View>
        </View>
        {this.renderFooter()}
      </View>
    )
  }

  renderTimer () {
    const styles = {

    }

    return (
      <View>
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
    const styles = {

    }

    return (
      <View>
        <Text>Lap</Text>
      </View>
    )
  }

  renderFooter () {
    const styles = {

    }

    return (
      <View>
        <Text>Laps</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('stopwatch', () => stopwatch);
