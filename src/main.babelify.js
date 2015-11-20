;(function() {
  'use strict';
  var wrap = function(React, ReactDOM, Firebase, ReactFire,Tiles, InputTile) {
    console.log('Firebase = ', Firebase);
    console.log('ReactFire = ', ReactFire);


    var Main = React.createClass({
      mixins: [ReactFire],

      getInitialState: function() {
        return {
          items: [],
          text: ''
        };
      },
      componentWillMount: function() {
        this.firebaseRef = new Firebase("https://todo-app-react.firebaseio.com/lokesh");
        this.bindAsArray(this.firebaseRef.limitToLast(25), 'items');
      },
      onChange: function(e) {
        this.setState({text: e.target.value});
      },
      removeItem: function(key) {
        var firebaseRef = new Firebase('https://ReactFireTodoApp.firebaseio.com/items/');
        firebaseRef.child(key).remove();
      },
      addItem: function() {
          this.firebaseRefs['items'].push({
            text: this.state.text
          });
          this.setState({
            text: ''
          });
      },
      render: function() {
        return (
          <div className="main">
            <Tiles items={[1, 2, 3]} />
            <InputTile />
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
