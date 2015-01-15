;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var checkbox = $('#auto_update');

    function execute() {
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

    $('#execute').click(execute);
    if(checkbox.length > 0) {
      input.bind('input propertychange', autoUpdate);
      checkbox.click(autoUpdate);
    }
  });
})(jQuery, window, document);
