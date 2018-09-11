import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuotes } from '../actions';

class QuotesIndex extends Component {
  renderQuotes() {
    return this.props.quotes.map((quote) => {
      return (
        <div className="row" key={quote.id}>
          <div className="col-xs-10 col-xs-offset-1">
            <h3>{quote.author} - {quote.book}</h3>
            <p>{quote.content}</p>
            <Link to={`/quotes-react/${quote.id}`} >
              <i className="fas fa-link"></i>
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='container'>
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
