;(function() {
  'use strict';
  var wrap = function(React) {
    return React.createClass({
      displayName: 'input-tile',
      render: function() {
        return (
          <div className='input-tile'>
            <input type='input' placeholder='Add new item'/>
          </div>
        );
      }
    });
  };

  if (typeof define === 'function' && define.amd) {
    define('input-tile.babelify', [
      'react',
      ], wrap);
  }
})(this);
