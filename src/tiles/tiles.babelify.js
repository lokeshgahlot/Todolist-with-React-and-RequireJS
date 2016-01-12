;(function() {
  'use strict';

  var wrap = function(React, Tile) {
    return React.createClass({
      displayName: 'Tiles',
      render: function() {
        var self = this;
        var items = this.props.items.map(function(item, index) {
          return (
              <li>
                <Tile item={item} removeItem={self.props.removeItem}/>
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
