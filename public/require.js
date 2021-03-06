(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Child = React.createClass({
    displayName: "Child",

    handleChange: function (event) {
        var color = event.target.value;
        this.props.onChange(color);
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "select",
                { onChange: this.handleChange },
                React.createElement(
                    "option",
                    { value: "orange" },
                    "Orange"
                ),
                React.createElement(
                    "option",
                    { value: "blue" },
                    "Blue"
                ),
                React.createElement(
                    "option",
                    { value: "green" },
                    "Green"
                ),
                React.createElement(
                    "option",
                    { value: "black" },
                    "Black"
                ),
                React.createElement(
                    "option",
                    { value: "grey" },
                    "Grey"
                ),
                React.createElement(
                    "option",
                    { value: "purple" },
                    "Purple"
                ),
                React.createElement(
                    "option",
                    { value: "red" },
                    "Red"
                ),
                React.createElement(
                    "option",
                    { value: "white" },
                    "White"
                ),
                React.createElement(
                    "option",
                    { value: "mediumseagreen" },
                    "Medium Sea Green"
                ),
                React.createElement(
                    "option",
                    { value: "lightblue" },
                    "Light Blue"
                ),
                React.createElement(
                    "option",
                    { value: "crimson" },
                    "Crimson"
                ),
                React.createElement(
                    "option",
                    { value: "goldenrod" },
                    "Goldenrod"
                ),
                React.createElement(
                    "option",
                    { value: "aqua" },
                    "Aqua"
                ),
                React.createElement(
                    "option",
                    { value: "cadetblue" },
                    "Cadet Blue"
                ),
                React.createElement(
                    "option",
                    { value: "chartreuse" },
                    "Chartruese"
                ),
                React.createElement(
                    "option",
                    { value: "darkmagenta" },
                    "Dark Magenta"
                ),
                React.createElement(
                    "option",
                    { value: "darkolivegreen" },
                    "Dark Olive Green"
                ),
                React.createElement(
                    "option",
                    { value: "deeppink" },
                    "Deep Pink"
                ),
                React.createElement(
                    "option",
                    { value: "forestgreen" },
                    "Forest Green"
                ),
                React.createElement(
                    "option",
                    { value: "bisque" },
                    "Bisque"
                )
            )
        );
    }
});

module.exports = Child;

},{}],2:[function(require,module,exports){
var Child = require('./child');

var Parent = React.createClass({
    displayName: 'Parent',


    getInitialState: function () {
        return { color: 'white' };
    },

    changeColor: function (newColor) {
        this.setState({
            color: newColor
        });
    },

    render: function () {
        return React.createElement(
            'div',
            { style: { backgroundColor: this.state.color, height: '400', width: '400' }, className: 'picker' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'h1',
                    null,
                    'The current color is: ',
                    this.state.color
                ),
                React.createElement(Child, {
                    onChange: this.changeColor,
                    color: this.state.color })
            )
        );
    }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./child":1}]},{},[2]);
