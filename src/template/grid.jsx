import React, { Component } from 'react';

const GRID_SIZES = ['xs', 'sm', 'md', 'lg'];

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';

    for (let i = 0; i < cols.length; i++) {
      classes += `col-${GRID_SIZES[i]}-${cols[i]} `;
    }

    return classes;
  };

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12);
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}