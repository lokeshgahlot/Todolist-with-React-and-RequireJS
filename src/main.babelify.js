;(function() {
  'use strict';
  var wrap = function(React, ReactDOM) {
    var Main = React.createClass({
      render: function() {
        return (
          <div className="commentBox">
            Hello, world! Main....
          </div>
        );
      }
    });
    ReactDOM.render(
      <Main />,
      document.getElementById('main')
    );
  };

  if (typeof define === 'function' && define.amd) {
    define('main.babelify',[
                    'react',
                    'react-dom'
                  ], wrap);
  }

})(this);
