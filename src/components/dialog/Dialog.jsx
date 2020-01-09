import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateDialog } from "../../redux/dialog";

class DialogTemplate extends Component {
  renderContent = () => {
    const { dialog } = this.props;
    const { object } = dialog;
    const { content } = object;
    if (content == null) return null;
    const Content = content;
    return <Content />;
  };

  render() {
    const { dialog, _updateDialog } = this.props;
    const { open, object } = dialog;
    const { title } = object;
    return (
      <Dialog
        open={open || false}
        fullWidth
        maxWidth="sm"
        onClose={() => _updateDialog(false, null)}
      >
        <DialogTitle>{title || ""}</DialogTitle>
        <DialogContent>{this.renderContent()}</DialogContent>
      </Dialog>
    );
  }
}

DialogTemplate.propTypes = {
  dialog: PropTypes.shape({
    open: PropTypes.bool,
    object: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node
    })
  }).isRequired,
  _updateDialog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dialog: state.dialog
});

const mapDispatchToProps = {
  _updateDialog: updateDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogTemplate);
