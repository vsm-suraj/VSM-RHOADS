myApp.controller('loginPageCtrl',function($scope, $http, login_page_service ) {
    
    $scope.login = function ( email, pwd ) {
        login_page_service.login( email, pwd );
    }
})