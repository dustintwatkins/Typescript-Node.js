let app = angular.module('myApp', []);
app.controller('appCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('hello from angular!');


    $http.get('/').then(doneCallback, failCallback);

    function doneCallback(res){
        console.log('JSON data received');
        res.data

    }

    function failCallback(err){
        console.log('unsuccessful in receiving JSON object from server');
        console.log(err.message);
    }

    function checkInput(input){
        if(input === undefined) {
            alert('Please enter text into the desired field');
            return false;
        } else{
            let params = {
                str: input
            }
            return params;
        }
    }

    $scope.tolowercase = function(){
        let params = checkInput($scope.lcase_ang);
        if(params)
            $http.post('/toLowerCase', params).then(doneCallback, failCallback);
    };

    $scope.trim = function(){
        console.log($scope.trim_input);
        let params = checkInput($scope.trim_input);
        if(params)
            $http.post('/trim', params).then(doneCallback, failCallback);
    }

    $scope.parseint = function(){
        console.log($scope.parseint_input);
        let params = checkInput($scope.parseint_input);
        if(params)
            $http.post('/parseInt', params).then(doneCallback, failCallback);
    }

    $scope.command = function(){
        console.log('command clicked');
        console.log($scope.cmd_input);

        $http.get('/command').then(doneCallback, failCallback);
    }
}]);