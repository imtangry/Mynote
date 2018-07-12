import React, { Component } from 'react';

class bookType extends Component {
    render() {
        var data = this.props.data;
        return (
            <div className={'book'}>
                <div className={'a_c'}>
                    {data.title}
                </div>
                <div className={'item'} dangerouslySetInnerHTML = {{ __html:data.content }}></div>
                </div>
        );
    }
}
export default bookType;