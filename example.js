var app = angular.module('app', ['ngRoute', 'ngAnimate']).controller('ctrl', function ($scope, $route) {
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/naide1', {
            templateUrl: "example.html",
            controller: "naide1"
        })
        .when('/naide2', {
            templateUrl: "example.html",
            controller: "naide2"
        })
        .when('/naide3', {
            templateUrl: "example.html",
            controller: "naide3"
        })
        .when('/naide4', {
            templateUrl: "example.html",
            controller: "naide4"
        })
        .when('/naide5', {
            templateUrl: "example.html",
            controller: "naide5"
        })
});

app.controller("naide1", function ($scope, $route) {
    $scope.example = {
        title: 'Updating a span when input text changes using jQuery.',
        link: 'examples/example1.html',
        exampleCode: [
            '<html>',
            '  <head>',
            '    <meta charset="utf-8">',
            '    <title>DIY One-way Data Binding with jQuery</title>',
            '    <script src="//code.jquery.com/jquery-2.0.3.min.js"></script>',
            '  </head>',
            '  <body>',
            '    Name:<input id="textInput" type="text"/>',
            '    Hello <span id="nameDiv"></span>!',
            '',
            '    <script>',
            '      $(\'#textInput\').on(\'keyup\', function(){',
            '        $(\'#nameDiv\').html($(\'#textInput\').val());',
            '      });',
            '    </script>',
            '  </body>',
            '</html>'
        ]
    }
});

app.controller("naide5", function ($scope, $route) {
    $scope.example = {
        title: 'Formatting population using Angular filters in templates.',
        link: 'examples/example5.html',
        exampleCode: [
            '<html ng-app="countryApp">',
            '  <head>',
            '    <meta charset="utf-8">',
            '    <title>Angular.js Example</title>',
            '    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js"></script>',
            '    <script>',
            '      var countryApp = angular.module(\'countryApp\', []);',
            '      countryApp.controller(\'CountryCtrl\', function ($scope, $http){',
            '        $http.get(\'countries.json\').success(function(data) {',
            '          $scope.countries = data;',
            '        });',
            '      });',
            '    </script>',
            '  </head>',
            '  <body ng-controller="CountryCtrl">',
            '    <table>',
            '      <tr>',
            '        <th>Country</th>',
            '        <th>Population</th>',
            '        <th>Flag</th>',
            '        <th>Capital</th>',
            '        <th><a href="http://en.wikipedia.org/wiki/List_of_countries_by_GDP_(PPP)">GDP (PPP)</a></th>',
            '      </tr>',
            '      <tr ng-repeat="country in countries">',
            '        <td>{{country.name}}</td>',
            '        <td>{{country.population | number }}</td>',
            '        <td><img ng-src="{{country.flagURL}}" width="100"></td>',
            '        <td>{{country.capital}}</td>',
            '        <td>{{country.gdp | currency }}</td>',
            // '      </tr>',
            '    </table>',
            '  </body>',
            '</html>'
        ]
    }
});

app.controller("naide4", function ($scope, $route) {
    $scope.example = {
        title: 'Sorting table columns interactively.',
        link: 'examples/example4.html',
        exampleCode: [
            '<html ng-app="countryApp">',
            '  <head>',
            '    <meta charset="utf-8">',
            '    <title>Angular.js Example</title>',
            '    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js"></script>',
            '    <script>',
            '      var countryApp = angular.module(\'countryApp\', []);',
            '      countryApp.controller(\'CountryCtrl\', function ($scope, $http){',
            '        $http.get(\'countries.json\').success(function(data) {',
            '          $scope.countries = data;',
            '        });',
            '',
            '        $scope.sortField = \'population\';',
            '      });',
            '    </script>',
            '  </head>',
            '  <body ng-controller="CountryCtrl">',
            '    Search:<input ng-model="query" type="text"/>',
            '    <table>',
            '      <tr>',
            '        <th><a href="" ng-click="sortField = \'name\'">Country</a></th>',
            '        <th><a href="" ng-click="sortField = \'population\'">Population</a></th>',
            '      </tr>',
            '      <tr ng-repeat="country in countries | filter:query | orderBy:sortField">',
            '        <td>{{country.name}}</td>',
            '        <td>{{country.population}}</td>',
            // '      </tr>',
            '    </table>',
            '  </body>',
            '</html>'
        ]
    }
});

app.controller("naide2", function ($scope, $route) {
    $scope.example = {
        title: 'Added keyup event listener on textInput.',
        link: 'examples/example2.html',
        exampleCode: [
            '<html>',
            '  <head>',
            '    <meta charset="utf-8">',
            '    <title>HTML Starter</title>',
            '  </head>',
            '  <body>',
            '    Name:<input id="textInput" type="text"/>',
            '    Hello world!',
            '',
            '    <script>',
            '      var textInputElement = document.getElementById(\'textInput\');',
            // '',
            '      textInputElement.addEventListener(\'keyup\', function(){',
            '        console.log(\'Got keyup event.\');',
            '      });',
            '    </script>',
            '  </body>',
            '</html>'
        ]
    }
});

app.controller("naide3", function ($scope, $route) {
    $scope.example = {
        title: 'Using ng-src.',
        link: 'examples/example3.html',
        exampleCode: [
            '<html ng-app="countryApp">',
            '  <head>',
            '    <meta charset="utf-8">',
            '    <title>Angular.js Example</title>',
            '    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min.js"></script>',
            '    <script>',
            '      var countryApp = angular.module(\'countryApp\', []);',
            '      countryApp.controller(\'CountryCtrl\', function ($scope, $http){',
            '        $http.get(\'countries.json\').success(function(data) {',
            '          $scope.countries = data;',
            '        });',
            '      });',
            '    </script>',
            '  </head>',
            '  <body ng-controller="CountryCtrl">',
            '    <table>',
            '      <tr>',
            '        <th>Country</th>',
            '        <th>Population</th>',
            '        <th>Flag</th>',
            '      </tr>',
            '      <tr ng-repeat="country in countries">',
            '        <td>{{country.name}}</td>',
            '        <td>{{country.population}}</td>',
            '        <td><img ng-src="{{country.flagURL}}" width="100"></td>',
            // '      </tr>',
            '    </table>',
            '  </body>',
            '</html>'
        ]
    }
});
