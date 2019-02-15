'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Project, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.state.open) {
                console.log("open");
                return React.createElement(
                    "div",
                    { className: "infoBox row", id: "jox", "data-status": "closed", onClick: function onClick() {
                            return _this2.setState({ open: false });
                        } },
                    React.createElement(
                        "div",
                        { className: "logoContainer col-md-12 col-sm-12" },
                        React.createElement("div", { className: "logo", id: "joxlogo" })
                    ),
                    React.createElement(
                        "div",
                        { className: "labels col-md-12 col-sm-12" },
                        React.createElement(
                            "div",
                            { className: "label" },
                            "Habit Tracker"
                        ),
                        React.createElement(
                            "div",
                            { className: "label" },
                            "React Native"
                        ),
                        React.createElement(
                            "div",
                            { className: "label" },
                            "Expo"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "projectInfo col-md-12" },
                        React.createElement(
                            "div",
                            { className: "mediaContainer col-md-6 col-sm-6" },
                            React.createElement("img", { src: "img/jox.png" })
                        ),
                        React.createElement(
                            "div",
                            { className: "description" },
                            React.createElement(
                                "span",
                                null,
                                React.createElement(
                                    "b",
                                    null,
                                    "Jox"
                                ),
                                " is a minimalistic habit tracker. It's supposed to be easy to use while still visualizing your habits in a nice way. I'm developing and designing this with my girlfriend, and I'm hoping to get it out soon.",
                                React.createElement("br", null),
                                React.createElement("br", null),
                                React.createElement(
                                    "a",
                                    { className: "disabled" },
                                    "Coming soon!"
                                ),
                                React.createElement("br", null)
                            )
                        )
                    )
                );
            }

            return React.createElement(
                "div",
                { className: "infoBox row", id: "jox", "data-status": "closed", onClick: function onClick() {
                        return _this2.setState({ open: true });
                    } },
                React.createElement(
                    "div",
                    { className: "logoContainer col-md-12 col-sm-12" },
                    React.createElement("div", { className: "logo", id: "joxlogo" })
                )
            );
        }
    }]);

    return Project;
}(React.Component);

var domContainer = document.querySelector('#projectContainer');
ReactDOM.render(React.createElement(Project, null), domContainer);