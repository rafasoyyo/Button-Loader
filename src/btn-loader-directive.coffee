###
    AngularJS directive for button loader
    @author Rafael Hernández Navarro - twitter: @rafa_soyyo
    @version 1.0.0
###
angular
    .module('btnLoader', [])
    .directive 'btnLoader', ($timeout) ->
        return {
                restrict: 'A'
                scope   : 
                            btnCondition: "=btnCondition" 
                            btnTexts    : "=btnTexts"
                            btnIcons    : "=btnIcons"
                            btnInclude  : "=btnInclude"
                            btnColor    : "=btnColor"
                        
                template: (element, attrs) -> 
                    
                    if attrs.btnInclude 
                        return '<span ng-include="btnInclude"></span>'
                    
                    else
                        return  """
                                <style> 
                                    .btn-load-span{
                                        display:inline-block; vertical-align: middle}
                                    .btn-load-icon{
                                        display:inline-block; vertical-align: initial; margin: 0 3px 0 0}
                                    .btn-loading-span{
                                        display:inline-block; vertical-align:middle; position:relative;}
                                    .btn-loading-icon {
                                      height: 15px; width: 15px; position: relative; display:inline-block; vertical-align:middle;
                                      -webkit-animation: rotation 1s infinite linear; -moz-animation: rotation 1s infinite linear;
                                      -o-animation: rotation 1s infinite linear; animation: rotation 1s infinite linear;
                                      border: 2px solid; border-radius: 100%; margin: 0 0 0 5px;}
                                    .btn-loading-icon:before {
                                      content: ""; display: block; position: absolute; left: -2px; top: -2px; height: 100%; width: 100%;
                                      border-top: 2px solid; border-left: 2px solid transparent;
                                      border-bottom: 2px solid transparent; border-right: 2px solid transparent; border-radius: 100%; } 
                                    @-webkit-keyframes rotation {
                                      from { -webkit-transform: rotate(0deg);   }
                                      to   { -webkit-transform: rotate(359deg); } }
                                    @-moz-keyframes rotation {
                                      from { -moz-transform: rotate(0deg);   }
                                      to   { -moz-transform: rotate(359deg); } }
                                    @-o-keyframes rotation {
                                      from { -o-transform: rotate(0deg);   }
                                      to   { -o-transform: rotate(359deg); } }
                                    @keyframes rotation {
                                      from { transform: rotate(0deg);   }
                                      to   { transform: rotate(359deg); } }
                                </style>

                                <span class="btn-load-span" ng-hide="active">
                                    <i ng-if="btnIcons.load" class="btn-load-icon {{btnIcons.load}}"></i>
                                    {{ btnTexts.load || "Save" }}
                                </span>
                                <span class="btn-loading-span" ng-show="active">
                                    {{ btnTexts.loading || "Saving" }}
                                    <i class="{{btnIcons.loading || \'btn-loading-icon\' }}" style="border-color:rgba({{btnColor || '0,0,0'}} , .3)"></i>
                                </span>
                                <input type="submit" style="display:none">
                                """

                link: ($scope, element, attrs) ->                   
                    
                    $scope.btnCondition = false

                    element.bind 'click', ->
                        if attrs.btnKeepsize
                            e = element[0]
                            element.css({'width': e.offsetWidth + 'px', 'height': e.offsetHeight + 'px'})
                        
                        $timeout( ->
                            $scope.btnCondition = true
                        ,1)

                    $scope.$watch 'btnCondition', (val, old) ->
                        if not val and attrs.btnKeepsize then element.css({background: '', width: '', height: ''})
                        $scope.active = if val then true else false
                }