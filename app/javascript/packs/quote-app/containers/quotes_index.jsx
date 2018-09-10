import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuotes } from '../actions';

class QuotesIndex extends Component {
  renderQuotes() {
    return this.props.quotes.map((quote) => {
      return (
        <Link to={`/quotes/${quote.id}`} key={quote.id}>
          <div className="quote-item">
            <h3>{quote.author} - {quote.book}</h3>
            <p>{quote.content}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderQuotes()}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    quotes: reduxState.quotes
  }
}

export default connect(mapStateToProps, null)(QuotesIndex);
