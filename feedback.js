angular.module('app', []).controller('ctrl', function ($scope, $http) {
    $scope.insertData = function (fullname, email, content) {
        $http.post("sql.php", {
            'email_fullname': fullname,
            'email_address': email,
            'email_body': content
        }).then(function (response) {
            console.log(response);
        }, function (error) {
            alert("Error sending email");
            console.error(error);
        });
    }
});
