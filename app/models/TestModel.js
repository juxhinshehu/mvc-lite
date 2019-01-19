(function (global) {

    global.App.Model('TestModel', function (setData) {
        /** Creating  a function (this.testData) which will include some elements inside of an object */

        this.testData = function (level) {
            level = level || 0;
            level++;
            return level > 9 ? {} : {
                array: Object.keys(this.testData(level)).sort(),
                object: this.testData(level),
                boolean: Math.random() >= 0.5,
                string: Math.random().toString(36).substring(7),
                callback: function () {
                    return level;
                },
                integer: this.testData(level).hasOwnProperty('callback') ? this.testData(level).callback() + Math.random() : 0
            }
        };

        this.getClientInfo = function (callback) {
            console.log(callback);
            global.Utils.Http.get('https://ip.nf/me.json', {}, function (response) {
                console.log('TestModel:getClientInfo', response);
                callback(response.ip);
                setData(response.ip);
            });
        };

        this.prova = gciTest;

        function gciTest() {
            console.log('TestModel:gciTest');
            return 'rexhina';
        }


    });

})(Function('return this')());
