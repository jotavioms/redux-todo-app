import React from 'react';
import { connect } from 'react-redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription } from './todoActions';
import { bindActionCreators } from 'redux';

const CHARCODE_FOR_SHORTCUT = {
  'enter': 13,
  'space': 32,
};

const TodoForm = props => {
  const keyHandler = (e) => {
    if (e.charCode === CHARCODE_FOR_SHORTCUT.enter) {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    }

    if (e.charCode === CHARCODE_FOR_SHORTCUT.space && e.shiftKey) {
      props.handleClear();
    }
  };

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input
          id='description'
          className='form-control'
          placeholder='Adicione uma tarefa'
          value={props.description}
          onChange={props.changeDescription}
          onKeyPress={keyHandler}
        />
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton
          style='primary'
          icon='plus'
          onClick={props.handleAdd}
        />
        <IconButton
          style='info'
          icon='search'
          onClick={props.handleSearch}
        />
        <IconButton
          style='default'
          icon='close'
          onClick={props.handleClear}
        />
      </Grid>
    </div>
  )
};

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);