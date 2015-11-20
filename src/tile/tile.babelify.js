;(function() {
  'use strict';

  var wrap = function(React) {
    return React.createClass({
      displayName: 'Tile',
      render: function() {
        return (
          <div className='tile'>
            {this.props.text}
          </div>
        );
      }
    });
  };

  if (typeof define === 'function' && define.amd) {
    define('tile.babelify', [
      'react'
      ], wrap);
  }
})(this);
