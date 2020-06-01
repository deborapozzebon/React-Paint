import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker2 extends React.Component {

    render() {
        return (
            <SketchPicker
                color = {this.props.color}
                onChangeComplete={ this.props.onChangeComplete }
            />
        );
    }
}

export default ColorPicker2;