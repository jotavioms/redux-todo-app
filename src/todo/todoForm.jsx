import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { add, changeDescription, clear, search } from './todoActions';

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
    const { add, clear, search, description } = this.props;

    if (e.charCode === CHARCODE_FOR_SHORTCUT.enter) {
      e.shiftKey ? search() : add(description);
    }

    if (e.charCode === CHARCODE_FOR_SHORTCUT.space && e.shiftKey) {
      clear();
    }
  };

  render() {
    const { add, changeDescription, clear, search, description } = this.props;

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={description}
            onChange={changeDescription}
            onKeyPress={this.keyHandler}
          />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton
            style='primary'
            icon='plus'
            onClick={() => add(description)}
          />
          <IconButton
            style='info'
            icon='search'
            onClick={() => search()}
          />
          <IconButton
            style='default'
            icon='close'
            onClick={() => clear()}
          />
        </Grid>
      </div>
    )
  };
};

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, clear, search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
