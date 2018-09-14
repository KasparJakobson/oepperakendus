angular.module('app', []).controller('ctrl', function ($scope) {
    $scope.todos = [];
    var idNo = 1;
    $scope.selectedItems = [];

    $scope.update = function (todo) {

        if (!$scope.todos.includes(todo)) {
            $scope.todos.push({id: idNo++, description: todo, selected: false});
        }

        $scope.selectedItems.push({id: idNo++, description: todo, selected: false});
        $scope.length = "Pead veel " + $scope.selectedItems.length + " asja tegema.";
    };

    $scope.checked = function (item) {
        var index = $scope.selectedItems.indexOf(item);

        if (!item.selected) {
            $scope.selectedItems.splice(index, 1);
        }
        else {
            $scope.selectedItems.push(item);
        }
        $scope.length = "Pead veel " + $scope.selectedItems.length + " asja tegema.";
    };

    $scope.archive = function (item) {
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
    }
});
