'use strict';
angular.module('ngSocial').run(['$templateCache', function ($templateCache) {
	$templateCache.put('/views/buttons.html', '<ul class="ng-social"> <li ng-repeat="(button, options) in buttons"> <a ng-href="{{link(button, options)}}" target="_blank" ng-click="clickShare($event, button, options)" class="ng-social-button" ng-class="\'ng-social-button_\' + button"> <span class="ng-social-icon"></span> <span class="ng-social-text">{{options.title}}</span> </a> </li> </ul>');
}]);