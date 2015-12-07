angular.module("btnLoader",[]).directive("btnLoader",["$timeout",function(n){return{restrict:"A",scope:{btnCondition:"=btnCondition",btnTexts:"=btnTexts",btnIcons:"=btnIcons",btnInclude:"=btnInclude"},template:function(n,t){return t.btnInclude?'<span ng-include="btnInclude"></span>':'<style> \n    .btn-load-span{\n        display:inline-block; vertical-align: middle}\n    .btn-load-icon{\n        display:inline-block; vertical-align: initial; margin: 0 3px 0 0}\n    .btn-loading-span{\n        display:inline-block; vertical-align:middle; position:relative;}\n    .btn-loading-icon {\n      height: 11px; width: 11px; position: relative; display:inline-block; vertical-align:middle;\n      -webkit-animation: rotation 1s infinite linear; -moz-animation: rotation 1s infinite linear;\n      -o-animation: rotation 1s infinite linear; animation: rotation 1s infinite linear;\n      border: 2px solid rgba(0, 0, 0, 0.2); border-radius: 100%; margin: 0 0 0 5px;}\n    .btn-loading-icon:before {\n      content: ""; display: block; position: absolute; left: -2px; top: -2px; height: 100%; width: 100%;\n      border-top: 2px solid rgba(0, 0, 0, 0.8); border-left: 2px solid transparent;\n      border-bottom: 2px solid transparent; border-right: 2px solid transparent; border-radius: 100%; } \n    @-webkit-keyframes rotation {\n      from { -webkit-transform: rotate(0deg);   }\n      to   { -webkit-transform: rotate(359deg); } }\n    @-moz-keyframes rotation {\n      from { -moz-transform: rotate(0deg);   }\n      to   { -moz-transform: rotate(359deg); } }\n    @-o-keyframes rotation {\n      from { -o-transform: rotate(0deg);   }\n      to   { -o-transform: rotate(359deg); } }\n    @keyframes rotation {\n      from { transform: rotate(0deg);   }\n      to   { transform: rotate(359deg); } }\n</style>\n\n<span class="btn-load-span" ng-hide="active">\n    <i ng-if="{{btnIcons.load}}" class="btn-load-icon {{btnIcons.load}}"></i>\n    {{ btnTexts.load || "Save" }}\n</span>\n<span class="btn-loading-span" ng-show="active">\n    {{ btnTexts.loading || "Saving" }}\n    <i class="{{btnIcons.loading || \'btn-loading-icon\' }}"></i>\n</span>\n<input type="submit" style="display:none">'},link:function(t,i,o){return t.btnCondition=!1,i.bind("click",function(){var e;return o.btnKeepsize&&(e=i[0],i.css({width:e.offsetWidth+"px",height:e.offsetHeight+"px"})),n(function(){return t.btnCondition=!0},1)}),t.$watch("btnCondition",function(n,e){return!n&&o.btnKeepsize&&i.css({background:"",width:"",height:""}),t.active=n?!0:!1})}}}]);