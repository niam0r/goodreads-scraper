import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <Link className="btn btn-primary btn-cta" to="/quotes-react/">
          Back to all quotes
        </Link>
        <div className="row" key={quote.id}>
          <div className="col-xs-10 col-xs-offset-1">
            <span>
              <img src={quote.author_img}/>
              <h3>{quote.author} - {quote.book}</h3>
            </span>
            <p>{quote.content}</p>

          </div>
        </div>
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
