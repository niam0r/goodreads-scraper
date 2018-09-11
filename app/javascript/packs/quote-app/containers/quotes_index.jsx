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
            <i className="fas fa-quote-left"></i>
            {quote.content}
            <i className="fas fa-quote-right"></i>

            <img src={quote.author_img}/> <strong>{quote.author}</strong> - {quote.book}
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
        <br/>
        {this.renderQuotes()}
        <br/>
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
