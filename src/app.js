import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';

class Hoge extends React.Component {
  render() {
    return <Link to="/foo">hoge</Link>;
  }
}


class Foo extends React.Component {
  render() {
    return <Link to="/">foo</Link>;
  }
}

ReactDom.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={Hoge} />
      <Route path="/foo" component={Foo} />
    </Router>
  ),
  document.getElementById('app')
);


