
/*
    AngularJS directive for button loader
    @author Rafael Hernández Navarro - twitter: @rafa_soyyo
    @version 1.0.0
 */
angular.module('btnLoader', []).directive('btnLoader', ["$timeout", function($timeout) {
  return {
    restrict: 'A',
    scope: {
      btnCondition: "=btnCondition",
      btnTexts: "=btnTexts",
      btnIcons: "=btnIcons",
      btnInclude: "=btnInclude",
      btnColor: "=btnColor"
    },
    template: function(element, attrs) {
      if (attrs.btnInclude) {
        return '<span ng-include="btnInclude"></span>';
      } else {
        return "<style> \n    .btn-load-span{\n        display:inline-block; vertical-align: middle}\n    .btn-load-icon{\n        display:inline-block; vertical-align: initial; margin: 0 3px 0 0}\n    .btn-loading-span{\n        display:inline-block; vertical-align:middle; position:relative;}\n    .btn-loading-icon {\n      height: 15px; width: 15px; position: relative; display:inline-block; vertical-align:middle;\n      -webkit-animation: rotation 1s infinite linear; -moz-animation: rotation 1s infinite linear;\n      -o-animation: rotation 1s infinite linear; animation: rotation 1s infinite linear;\n      border: 2px solid; border-radius: 100%; margin: 0 0 0 5px;}\n    .btn-loading-icon:before {\n      content: \"\"; display: block; position: absolute; left: 0px; top: -2px; height: 100%; width: 100%;\n      border-top: 2px solid; border-left: 2px solid transparent;\n      border-bottom: 2px solid transparent; border-right: 2px solid transparent; border-radius: 100%; } \n    @-webkit-keyframes rotation {\n      from { -webkit-transform: rotate(0deg);   }\n      to   { -webkit-transform: rotate(359deg); } }\n    @-moz-keyframes rotation {\n      from { -moz-transform: rotate(0deg);   }\n      to   { -moz-transform: rotate(359deg); } }\n    @-o-keyframes rotation {\n      from { -o-transform: rotate(0deg);   }\n      to   { -o-transform: rotate(359deg); } }\n    @keyframes rotation {\n      from { transform: rotate(0deg);   }\n      to   { transform: rotate(359deg); } }\n</style>\n\n<span class=\"btn-load-span\" ng-hide=\"active\">\n    <i ng-if=\"btnIcons.load\" class=\"btn-load-icon {{btnIcons.load}}\"></i>\n    {{ btnTexts.load || \"Save\" }}\n</span>\n<span class=\"btn-loading-span\" ng-show=\"active\">\n    {{ btnTexts.loading || \"Saving\" }}\n    <i class=\"{{btnIcons.loading || \'btn-loading-icon\' }}\" style=\"border-color:rgba({{btnColor || '0,0,0'}} , .3)\"></i>\n</span>\n<input type=\"submit\" style=\"display:none\">";
      }
    },
    link: function($scope, element, attrs) {
      $scope.btnCondition = false;
      element.bind('click', function() {
        var e;
        if (attrs.btnKeepsize) {
          e = element[0];
          element.css({
            'width': e.offsetWidth + 'px',
            'height': e.offsetHeight + 'px'
          });
        }
        return $timeout(function() {
          return $scope.btnCondition = true;
        }, 1);
      });
      return $scope.$watch('btnCondition', function(val, old) {
        if (!val && attrs.btnKeepsize) {
          element.css({
            background: '',
            width: '',
            height: ''
          });
        }
        return $scope.active = val ? true : false;
      });
    }
  };
}]);
