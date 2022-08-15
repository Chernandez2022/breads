const React = require("react");
const Def = require("./default");
const Default = require("./layouts/Default");

function error404() {
  return (
    <Default>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Default>
  );
}

module.exports = error404;