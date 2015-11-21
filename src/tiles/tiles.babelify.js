;(function() {
  'use strict';

  var wrap = function(React, Tile) {
    return React.createClass({
      displayName: 'Tiles',
      render: function() {

        var items = this.props.items.map(function(item, index) {
          return (
              <li>
                <Tile text={item.text} key={item.key} />
              </li>
            );
        });
        return (
          <ul className='tiles' >
            {items}
          </ul>
        );
      }
    });
  };

  if (typeof define === 'function' && define.amd) {
    define('tiles.babelify', [
      'react',
      'tile.babelify'
      ], wrap);
  }
})(this);
