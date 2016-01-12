;(function() {
  'use strict';
  var wrap = function(React) {
    return React.createClass({
      displayName: 'input-tile',
      handleSubmit: function(e) {
        e.preventDefault();
        this.props.onSubmit(this.refs.listItem.value.trim());
        this.refs.listItem.value = '';
      },
      render: function() {
        return (
          <div className='input-tile'>
            <form onSubmit={this.handleSubmit}>
              <input ref="listItem" type='text' placeholder='Add new item'/>
            </form>
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
