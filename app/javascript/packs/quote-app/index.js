// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// external modules
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// internal modules
import QuotesIndex from './containers/quotes_index';
import QuotesShow from './containers/quotes_show';

// state and reducers
import quotesReducer fomr './reducers/quotes_reducer';

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Quote" />,
    document.body.appendChild(document.createElement('div')),
  )
})
