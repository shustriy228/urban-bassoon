import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import * as botsActions from "../../../actions/bots";

class RefreshButton extends React.Component {
  state = {
    iconLoading: false
  };

  refreshTable = () => {
    this.setState({ iconLoading: true });
    //  make a request
    //  this.setState({iconLoading: false});
  };

  refreshTable = () => {
    this.setState({ iconLoading: true });

    this.props.botsActions
      .refreshContent()
      .then(() => this.setState({ iconLoading: false }));
  };

  render() {
    const { iconLoading } = this.state;

    return (
      <>
        <Button
          type="default"
          icon="reload"
          loading={iconLoading}
          onClick={() => this.refreshTable()}
          // для всяких индикаторов загрузки тоже лучше юзать редакс
          // например создаешь в редьюсерах файл ui.js и в нем стейт с loading: false,
          // и перед любым запросом на серв делаешь его true, а когда ответ получен снова false
          //
        />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    botsActions: bindActionCreators(botsActions, dispatch) // подключаем экшены
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RefreshButton); // оборачиваем компонент
