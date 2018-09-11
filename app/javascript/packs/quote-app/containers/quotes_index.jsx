import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchQuotes } from '../actions';

class QuotesIndex extends Component {
  renderQuotes() {
    return this.props.quotes.map((quote) => {
      return (
        <div key={quote.id}>
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
              <Link to={`/quotes-react/${quote.id}`} >
              <i className="fas fa-link"></i>
            </Link>
            </div>
          </section>
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
