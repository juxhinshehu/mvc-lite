(function (global) {

    global.App.Controller('juxhin-test', './components/juxhin-test/', function ($scope, _update) {
        // declare all variables that I'm going to use
        var FibonacciModel = global.App.getModel('JuxhinTest');
        $scope.title = "Calculate Test";
        $scope.number = '';
        $scope.result = null;

        // get input value
        $scope.inputNumber = function () {
            
            switch (this.name) {
                case 'number':
                    $scope.number = this.value;
                    break;
            }
            _update();
        };

        

        // calculate multiplication using model JuxhinTest
        $scope.getFibonacciSequence = function () {
            $scope.result = FibonacciModel.getFibSeq($scope.number);
            _update();
        }


    });
})(Function('return this')());
