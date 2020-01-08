import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { connect } from "react-redux";
import { updateDialog } from "../../redux/dialog"

class DialogTemplate extends Component {
  renderContent = () => {
    if (this.props.dialog.object.content == null)
      return null;
    let Content = this.props.dialog.object.content;
    return <Content />
  }

  render() {
    console.log(this.props)
    return (
      <Dialog
        open={this.props.dialog.open||false}
        onClose={()=>this.props._updateDialog(false,null)}
      >
        <DialogTitle>{this.props.dialog.object.title||""}</DialogTitle>
        <DialogContent>{this.renderContent()}</DialogContent>
      </Dialog>
    );
  }
  
}

const mapStateToProps = state => ({
  dialog: state.dialog
});

const mapDispatchToProps = {
  _updateDialog: updateDialog
};

export default connect(mapStateToProps,mapDispatchToProps)(DialogTemplate);