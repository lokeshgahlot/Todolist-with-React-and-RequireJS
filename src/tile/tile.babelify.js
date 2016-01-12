;(function() {
  'use strict';

  var wrap = function(React) {
    return React.createClass({
      displayName: 'Tile',
      render: function() {
        var self = this;
        return (
          <div className='tile'>
            {this.props.item.text}
            <i className='icon trash' onClick={self.props.removeItem.bind(null, this.props.item.key)}/>
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
