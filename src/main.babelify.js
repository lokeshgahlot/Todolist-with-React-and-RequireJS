;(function() {
  'use strict';
  var wrap = function(React, ReactDOM, Firebase, ReactFire,Tiles, InputTile) {

    var Main = React.createClass({
      mixins: [ReactFire],

      getInitialState: function() {
        return {
          items: [],
          text: ''
        };
      },
      componentWillMount: function() {
        this.firebaseRef = new Firebase("https://todo-app-react.firebaseio.com/lokesh/items");
        this.bindAsArray(this.firebaseRef.limitToLast(25), 'items');
      },
      onChange: function(e) {
        this.setState({text: e.target.value});
      },
      onSubmit: function(data) {
        this.firebaseRefs['items'].push({
            text: data
          });
          this.setState({
            text: ''
          });
      },
      render: function() {
        var list = this.state.items.map(function(item ,index) {
          return {
            key: item['.key'],
            text: item['text']
          };
        });

        return (
          <div className="main">
            <Tiles items={list} />
            <InputTile onSubmit={this.onSubmit}/>
          </div>
        );
      }
    });
    ReactDOM.render(
      <Main/>,
      document.getElementById('main')
    );
  };

  if (typeof define === 'function' && define.amd) {
    define('main.babelify',[
                    'react',
                    'react-dom',
                    'firebase',
                    'reactfire',
                    'tiles.babelify',
                    'input-tile.babelify'
                  ], wrap);
  }

})(this);
