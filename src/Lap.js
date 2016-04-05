import React, {
  Component,
  Text,
  View
} from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'

export default class Lap extends Component {
  static propTypes () {
    return {
      time: PropTypes.string.isRequired,
      lapNumber: PropTypes.number.isRequired
    }
  }

  render () {
    const {time, lapNumber} = this.props

    if (!time || !lapNumber) {
      return null
    }

    const lapStyle = {
      justifyContent: 'space-around',
      flexDirection: 'row'
    }

    const lapText = {
      fontSize: 30
    }

    return (
      <View style={lapStyle}>
        <Text style={lapText}>Lap {lapNumber}</Text>
        <Text style={lapText}>{formatTime(time)}</Text>
      </View>
    )
  }
}
