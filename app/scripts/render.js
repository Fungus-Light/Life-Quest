M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
  var setting = document.getElementById("setting");
  var instances = M.Sidenav.init(setting, {
    edge: 'left'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var personspace = document.getElementById("personspace");
  var instances = M.Sidenav.init(personspace, {
    edge: 'left'
  });
});

$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
  });