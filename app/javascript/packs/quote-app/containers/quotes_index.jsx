import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuotes } from '../actions';

class QuotesIndex extends Component {

  render() {
    return (
      <div>
        QuotesIndex
      </div>
    );
  }
}


export default QuotesIndex;
