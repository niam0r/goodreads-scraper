import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { link } from 'react-router-dom';

import { fetchQuote } from '../actions';

class QuotesShow extends Component {
  componentDidMount() {
    if (!this.props.quote) {
      this.props.fetchQuote(this.props.match.params.id);
    }
  }
  render() {
    const quote = this.props.quote;
    if (!quote) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        QuotesShow
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10); // id from URL
  return {
    quote: reduxState.quotes.find(quote => quote.id === id)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesShow);
