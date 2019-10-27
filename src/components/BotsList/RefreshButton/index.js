import React from 'react';
import {Button} from 'antd';

class RefreshButton extends React.Component{

    state = {
        iconLoading: false,
    };

    refreshTable = () => {
        this.setState({ iconLoading: true });
        //  make a request
        //  this.setState({iconLoading: false});
    };


    render(){
        return(
            <>
            <Button
            type="default"
            icon="reload"
            loading={this.state.iconLoading}
            onClick={this.refreshTable}
            />
            </>
        );
    };
}
export default RefreshButton;