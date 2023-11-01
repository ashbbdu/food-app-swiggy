const React = reuqire("react");
const heading = React.createElement("h1", {
    title: "heading"
}, "Namaste React 1");
const heading2 = React.createElement("h2", {
    title: "heading"
}, "Namaste React 2");
const container = React.createElement("div", {}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
