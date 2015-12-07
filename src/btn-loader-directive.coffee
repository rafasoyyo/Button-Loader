
###
attrs:
  btn-loader                  -> to match with the directive
  btn-condition="condition1"  -> Set the variable to change state 
  btn-keepsize="true"         -> Keep the same size when active
  btn-texts="                 -> Texts for both states
  btn-include="true"          -> Add custom template
          {
              load:'load', 
              loading: 'loading...'
          }"
  btn-icons={                 -> Icons for both states
              load:'load', 
              loading: 'loading...'   
  }
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
                        
                template: (element, attrs) ->
                    
                    if attrs.btnInclude 
                        return '<span ng-include="btnInclude"></span>'
                    
                    else
                        return  {"""
                                    <style> 
                                        .btn-load-span{
                                            display:inline-block; vertical-align: middle}
                                        .btn-load-icon{
                                            display:inline-block; vertical-align: initial; margin: 0 3px 0 0}
                                        .btn-loading-span{
                                            display:inline-block; vertical-align:middle; position:relative;}
                                        .btn-loading-icon {
                                          height: 11px; width: 11px; position: relative; display:inline-block; vertical-align:middle;
                                          -webkit-animation: rotation 1s infinite linear; -moz-animation: rotation 1s infinite linear;
                                          -o-animation: rotation 1s infinite linear; animation: rotation 1s infinite linear;
                                          border: 2px solid rgba(0, 0, 0, 0.2); border-radius: 100%; margin: 0 0 0 5px;}
                                        .btn-loading-icon:before {
                                          content: ""; display: block; position: absolute; left: -2px; top: -2px; height: 100%; width: 100%;
                                          border-top: 2px solid rgba(0, 0, 0, 0.8); border-left: 2px solid transparent;
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
                                        <i class="btn-load-icon {{btnIcons.load}}"></i>
                                        {{ btnTexts.load || "Save" }}
                                    </span>
                                    <span class="btn-loading-span" ng-show="active">
                                        {{ btnTexts.loading || "Saving" }}
                                        <i class="{{btnIcons.loading || \'btn-loading-icon\' }}"></i>
                                    </span>
                                    <input type="submit" style="display:none">;
                                """}

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