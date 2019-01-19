(function (global) {

    global.App.Model('JuxhinTest', function (setData) {

        // function for multiplication
        this.getFibSeq = function (n) {
            n = parseInt(n);
            var arr = [0, 1];
            for (var i = 2; i < n + 1; i++){
                arr.push(arr[i - 2] + arr[i -1])
            }
            return arr.join();
        };

    });

})(Function('return this')());
