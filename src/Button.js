import React, {
  TouchableHighlight,
  Component,
  Text
} from 'react-native'

export default class Button extends Component {
  static propTypes () {
    return {
      label: PropTypes.string.isRequired,
      handler: PropTypes.func.isRequired
    }
  }

  render () {
    const {label, handler} = this.props

    if(!label) {
      return null
    }

    const buttonStyle = [
      {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      this.props.style
    ]

    return (
      <TouchableHighlight underlayColor='gray' onPress={handler} style={buttonStyle}>
        <Text>{label}</Text>
      </TouchableHighlight>
    )
  }
}
