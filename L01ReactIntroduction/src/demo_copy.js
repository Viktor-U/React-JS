const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);


const headingSectionReactElement = (
    <header>
        <h1> Hello JSX from React</h1>
        <h2>JSX is Awesome</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, rerum?</p>
    </header>
);


rootReactElement.render(headingSectionReactElement);