;(function() {
  'use strict';

  var wrap = function(React) {
    return React.createClass({
      displayName: 'Tile',
      deleteMe: function() {
        // todo: will add remove logic
        // this.props.removeItem(this.props.key);
        console.log('click....', this.props);
      },
      render: function() {
        return (
          <div className='tile' key={this.props.key} >
            {this.props.text}
            <i className='icon trash' onClick= {this.deleteMe}/>
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
