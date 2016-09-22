'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Devdocs = require('./Devdocs');

var _Devdocs2 = _interopRequireDefault(_Devdocs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEVDOCS_COMPONENT = 'com.robinmalfait.devdocs';

exports.default = function (robot) {
  var Devdocs = (0, _Devdocs2.default)(robot);

  robot.registerComponent(Devdocs, DEVDOCS_COMPONENT);

  robot.listen(/^devdocs$/, {
    description: "DevDocs is a fast, offline API documentation browser with 100+ docs including HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++, jQuery, and more.",
    usage: 'devdocs'
  }, function () {
    robot.addCard(DEVDOCS_COMPONENT);
  });

  robot.listen(/^devdocs (.*)$/, {
    description: "DevDocs is a fast, offline API documentation browser with 100+ docs including HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++, jQuery, and more.",
    usage: 'devdocs <query>'
  }, function (_ref) {
    var matches = _ref.matches;

    robot.addCard(DEVDOCS_COMPONENT, { query: matches.query });
  });
};