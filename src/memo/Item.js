import React, {Component} from 'react';
import {connect} from 'react-redux';

class Item extends Component {
    render(){
        let d = this.props.value.created;
        let h = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        return(
            <tr>
                <th>No. {this.props.index}</th>
                <td>{this.props.value.message}</td>
                <td>{h}</td>
            </tr>
        )
    }
}

export default connect()(Item);