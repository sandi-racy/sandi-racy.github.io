var $ = require('jquery');
window.jQuery = $;
require('fullpage.js');
require('typed.js');

$(document).ready(function(){
  $('#container').fullpage({
    anchors:['introduction', 'stacks', 'works', 'project', 'footer'],
    autoScrolling: false,
    fitToSection: false
  });

  $("#iam").typed({
    backDelay: 2000,
    loop: true,
    strings: ['web developer', 'father', 'silent reader'],
    typeSpeed: 100
  });
});
