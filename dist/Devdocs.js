'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (robot) {
  var enhance = robot.enhance;
  var restorableComponent = robot.restorableComponent;
  var withStyles = robot.withStyles;
  var React = robot.dependencies.React;
  var Full = robot.cards.Full;
  var Webview = robot.UI.Webview;


  var Devdocs = React.createClass({
    displayName: 'Devdocs',
    getInitialState: function getInitialState() {
      if (this.props.query === undefined) {
        return {
          url: 'http://devdocs.io/',
          newUrl: 'http://devdocs.io/'
        };
      }

      return {
        url: 'http://devdocs.io/#q=' + this.props.query,
        newUrl: 'http://devdocs.io/#q=' + this.props.query
      };
    },
    componentDidMount: function componentDidMount() {
      this.setState({ url: this.state.newUrl });
    },
    render: function render() {
      var _this = this;

      var url = this.state.url;
      var _props = this.props;
      var query = _props.query;
      var styles = _props.styles;

      var other = _objectWithoutProperties(_props, ['query', 'styles']);

      return React.createElement(
        Full,
        _extends({
          title: 'Devdocs'
        }, other),
        React.createElement(Webview, {
          src: url,
          className: styles.devdocs,
          onDidNavigateInPage: function onDidNavigateInPage(_ref) {
            var url = _ref.url;
            return _this.setState({ newUrl: url });
          }
        })
      );
    }
  });

  return enhance(Devdocs, [restorableComponent, withStyles(_styles2.default)]);
};