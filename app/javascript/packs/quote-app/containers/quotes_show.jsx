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
        <section className="quote">
          <blockquote>
            <p>{quote.content}</p>
          </blockquote>
          <div className="avatar-author-book">
            <img className="avatar-large" src={quote.author_img}/>
            <div className="author-book">
              <p><cite><strong>{quote.author}</strong></cite></p>
              <p><cite>{quote.book}</cite></p>
            </div>
          </div>
        </section>
        <div className="text-center">
          <Link className="btn btn-primary btn-cta" to="/quotes-react/">
            Back to all quotes
          </Link>
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
