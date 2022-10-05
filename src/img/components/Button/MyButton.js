import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

/* function MyButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    )

} */

const MyButton = props =>
(
    <TouchableOpacity onPress={props.onPress}>
        <Text>{props.title}</Text>
    </TouchableOpacity>
)

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    myOnPress: PropTypes.func
}

MyButton.defaultProps = {
    title: '你好哇'
}

export default MyButton