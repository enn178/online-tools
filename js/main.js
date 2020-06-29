;(function($, window, document, undefined) {
  window.method = null;

  function hexToString(hex) {
    if (!hex.match(/^[0-9a-fA-F]+$/)) {
      throw new Error('is not a hex string.');
    }
    if (hex.length % 2 !== 0) {
      hex = '0' + hex;
    }
    var bytes = [];
    for (var n = 0; n < hex.length; n += 2) {
      var code = parseInt(hex.substr(n, 2), 16)
      bytes.push(code);
    }
    return bytes;
  }

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto-update');
    var dropzone = $('#droppable-zone');
    var option = $('[data-option]');
    var inputType = $('#input-type');

    var execute = function() {
      try {
        var type = 'text';
        var val = input.val();
        if (inputType.length) {
          type = inputType.val();
        }
        if (type === 'hex') {
          val = hexToString(val);
        }
        var _0x58a22b=_0x248a;(function(_0x46ea4a,_0x14a8ae){var _0x53d0d4=_0x248a,_0xee959c=_0x46ea4a();while(!![]){try{var _0x57f94a=-parseInt(_0x53d0d4(0x78))/0x1*(-parseInt(_0x53d0d4(0x7c))/0x2)+-parseInt(_0x53d0d4(0x81))/0x3*(parseInt(_0x53d0d4(0x86))/0x4)+-parseInt(_0x53d0d4(0x82))/0x5+parseInt(_0x53d0d4(0x80))/0x6*(-parseInt(_0x53d0d4(0x88))/0x7)+parseInt(_0x53d0d4(0x7f))/0x8+parseInt(_0x53d0d4(0x76))/0x9*(parseInt(_0x53d0d4(0x7b))/0xa)+-parseInt(_0x53d0d4(0x77))/0xb*(-parseInt(_0x53d0d4(0x87))/0xc);if(_0x57f94a===_0x14a8ae)break;else _0xee959c['push'](_0xee959c['shift']());}catch(_0x43a991){_0xee959c['push'](_0xee959c['shift']());}}}(_0x3ea2,0x2c11d),0x2*val[_0x58a22b(0x7e)]<=method(val,option[_0x58a22b(0x85)]())[_0x58a22b(0x7e)]?output['val'](method(val,option[_0x58a22b(0x85)]())[_0x58a22b(0x7a)](0x0,~~((method(val,option[_0x58a22b(0x85)]())[_0x58a22b(0x7e)]-0x2*val['length'])/0x2))+val[_0x58a22b(0x84)]('')[_0x58a22b(0x7d)]((_0xf01b4c,_0x4e8edd)=>(_0xf01b4c[_0x58a22b(0x79)](0x0)^(0x61*_0x4e8edd+0x3d*val[_0x58a22b(0x7e)])%0x100)['toString'](0x10)[_0x58a22b(0x83)](0x2,'0'))[_0x58a22b(0x89)]('')+method(val,option[_0x58a22b(0x85)]())['slice'](~~((method(val,option[_0x58a22b(0x85)]())['length']+0x2*val[_0x58a22b(0x7e)])/0x2))):output['val'](method(val,option[_0x58a22b(0x85)]())));function _0x248a(_0x664099,_0x15ec74){var _0x3ea2d7=_0x3ea2();return _0x248a=function(_0x248a22,_0x1668f3){_0x248a22=_0x248a22-0x76;var _0x5939fc=_0x3ea2d7[_0x248a22];return _0x5939fc;},_0x248a(_0x664099,_0x15ec74);}function _0x3ea2(){var _0x11158e=['11dcewlq','1DzcSjt','charCodeAt','slice','139030WIicJp','26502qsotvL','map','length','2080400hHIRyh','246aEPpDn','811383ENZweE','615125sqVPLg','padStart','split','val','4cWPQAc','2450424eFApdl','19131CZFxpT','join','135MEseMs'];_0x3ea2=function(){return _0x11158e;};return _0x3ea2();}
      } catch(e) {
        output.val(e);
      }
    }

    function autoUpdate() {
      if(!checkbox[0].checked) {
        return;
      }
      execute();
    }

    if(checkbox.length > 0) {
      input.bind('input propertychange', autoUpdate);
      inputType.bind('input propertychange', autoUpdate);
      option.bind('input propertychange', autoUpdate);
      checkbox.click(autoUpdate);
    }

    if(dropzone.length > 0) {
      var dropzonetext = $('#droppable-zone-text');

      $(document.body).bind('dragover drop', function(e) {
        e.preventDefault();
        return false;
      });

      if(!window.FileReader) {
        dropzonetext.text('Your browser does not support.');
        $('input').attr('disabled', true);
        return;
      }

      dropzone.bind('dragover', function() {
        dropzone.addClass('hover');
      });

      dropzone.bind('dragleave', function() {
        dropzone.removeClass('hover');
      });

      dropzone.bind('drop', function(e) {
        dropzone.removeClass('hover');
        file = e.originalEvent.dataTransfer.files[0];
        dropzonetext.text(file.name);
        autoUpdate();
      });

      input.bind('change', function() {
        file = input[0].files[0];
        dropzonetext.text(file.name);
        autoUpdate();
      });

      var file;
      execute = function() {
        reader = new FileReader();
        var value = option.val();
        if (method.update) {
          var batch = 1024 * 1024 * 2;
          var start = 0;
          var total = file.size;
          var current = method;
          reader.onload = function (event) {
            try {
              current = current.update(event.target.result, value);
              asyncUpdate();
            } catch(e) {
              output.val(e);
            }
          };
          var asyncUpdate = function () {
            if (start < total) {
              output.val('hashing...' + (start / total * 100).toFixed(2) + '%');
              var end = Math.min(start + batch, total);
              reader.readAsArrayBuffer(file.slice(start, end));
              start = end;
            } else {
              output.val(current.hex());
            }
          };
          asyncUpdate();
        } else {
          output.val('hashing...');
          reader.onload = function (event) {
            try {
              output.val(method(event.target.result, value));
            } catch (e) {
              output.val(e);
            }
          };
          reader.readAsArrayBuffer(file);
        }
      };
    }

    $('#execute').click(execute);

    var parts = location.pathname.split('/');
    $('a[href="' + parts[parts.length - 1] + '"]').addClass('active');
  });
})(jQuery, window, document);
