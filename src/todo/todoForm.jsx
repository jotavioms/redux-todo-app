import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, search } from './todoActions';

const CHARCODE_FOR_SHORTCUT = {
  'enter': 13,
  'space': 32,
};

class TodoForm extends Component  {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  };

  componentWillMount() {
    this.props.search();
  };

  keyHandler(e) {
    if (e.charCode === CHARCODE_FOR_SHORTCUT.enter) {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    }

    if (e.charCode === CHARCODE_FOR_SHORTCUT.space && e.shiftKey) {
      this.props.handleClear();
    }
  };

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyPress={this.keyHandler}
          />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton
            style='primary'
            icon='plus'
            onClick={this.props.handleAdd}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={this.props.handleSearch}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    )
  };
};

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);