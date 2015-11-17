;(function() {
  'use strict';
  var wrap = function(React, ReactDOM, Tile, InputTile) {
    var Main = React.createClass({
      render: function() {
        return (
          <div className="main">
            <Tile text='Some Data'/>
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
                    'tile.babelify',
                    'input-tile.babelify'
                  ], wrap);
  }

})(this);
