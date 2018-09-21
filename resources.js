angular.module('app', []).controller('ctrl', function ($scope) {
    $scope.resources = [
        {
            'address': 'http://www.learn-angular.org/',
            'desc': 'Angulari õpetus'
        },
        {
            'address': 'https://www.w3schools.com/angular/',
            'desc': 'W3schools Angulari õpetus'
        },
        {
            'address': 'https://www.tutorialspoint.com/angular4/index.htm',
            'desc': 'Tutorialspoint Angulari õpetus'
        },
        {
            'address': 'https://www.codecademy.com/learn/learn-angularjs',
            'desc': 'Codecademy Angulari kursus'
        },
        {
            'address': 'https://thinkster.io/a-better-way-to-learn-angularjs',
            'desc': 'Thinkster Angulari õpetus'
        }
    ];

});
