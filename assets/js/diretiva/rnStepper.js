angular.module("Delivare").directive('rnStepper', function() {
    return {
        restrict: "AE",
        require: "ngModel",
        scope: {
            min: "=",
            max: "=",
            ngModel: "="
        },
        template: '<div class="form-inline">'+
        '<input type="text" class="form-control" style="text-align: center; padding: 0px; width: 60%; height: 20px;" ng-model="ngModel">' +
        '<span class="form-control" style="background-color: transparent; text-align: center; padding: 0px; height: 20px; border: 0px; width: 5px; padding-left: 10px;">' +
        '<a href="javascript:;" class="" style="color: #ccc; display: block; height: 50%; padding-top: 0px;" ng-click="increment();" ng-disabled="isOverMax()"><i class="fa fa-chevron-up" style="position: relative; top: -5px; "></i></a>' +
        '<a href="javascript:;" class="" style="color: #ccc; display: block; height: 50%; font-size: 100%;" ng-click="decrement();" ng-disabled="isOverMin()"><i class="fa fa-chevron-down" style="position: relative; top: -5px; "></i></a>' +
        '</span></div>',
        link: function(scope, iElement, iAttrs, ngModelController) {

            scope.label = '';
            scope.ngModel = 0;

            if (angular.isDefined(iAttrs.label)) {
                iAttrs.$observe('label', function(value) {
                    scope.label = ' ' + value;
                    ngModelController.$render();
                });
            }

            ngModelController.$render = function() {
                // update the validation status
                checkValidity();
            };

            // when model change, cast to integer
            ngModelController.$formatters.push(function(value) {
                return parseInt(value, 10);
            });

            // when view change, cast to integer
            ngModelController.$parsers.push(function(value) {
                return parseInt(value, 10);
            });
            scope.$watch('ngModel', function(newValue,oldval) {
                // console.log('watch', newValue,oldval)
                if(newValue!==oldval){
                    // console.log("May Need to trigger ng-changes");
                    // console.log('iAttrs', iAttrs, iAttrs.ngChange)
                    scope.$eval(iAttrs.ngChange);
                }
            });

            function checkValidity() {
                // check if min/max defined to check validity
                var valid = !(scope.isOverMin(true) || scope.isOverMax(true));
                // set our model validity
                // the outOfBounds is an arbitrary key for the error.
                // will be used to generate the CSS class names for the errors
                ngModelController.$setValidity('outOfBounds', valid);
            }

            function updateModel(offset) {
                // update the model, call $parsers pipeline...
                ngModelController.$setViewValue(ngModelController.$viewValue + offset);
                // update the local view
                ngModelController.$render();
            }

            scope.isOverMin = function(strict) {
                var offset = strict?0:1;
                return (angular.isDefined(scope.min) && (ngModelController.$viewValue - offset) < parseInt(scope.min, 10));
            };
            scope.isOverMax = function(strict) {
                var offset = strict?0:1;
                return (angular.isDefined(scope.max) && (ngModelController.$viewValue + offset) > parseInt(scope.max, 10));
            };


            // update the value when user clicks the buttons
            scope.increment = function() {
                updateModel(+1);
            };
            scope.decrement = function() {
                updateModel(-1);
            };

            // check validity on start, in case we're directly out of bounds
            checkValidity();

            // watch out min/max and recheck validity when they change
            scope.$watch('min+max', function() {
                checkValidity();
            });
        }
    }
});
