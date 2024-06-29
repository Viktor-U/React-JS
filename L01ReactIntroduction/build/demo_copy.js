var rootHtmlElement = document.getElementById('root');

var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headingSectionReactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        ' Hello JSX from React'
    ),
    React.createElement(
        'h2',
        null,
        'JSX is Awesome'
    )
);

rootReactElement.render(headingSectionReactElement);