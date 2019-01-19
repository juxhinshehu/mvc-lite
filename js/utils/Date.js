(function (global) {

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"];

    var DateFuncs = {
        // DD/MM/YYYY
        getDateString: function (dateObject, separator) {
            separator = separator || '/';

            var day = dateObject.getDate(),
                month = dateObject.getMonth() + 1,
                year = dateObject.getFullYear();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return [day, month, year].join(separator);
        },
        // ddd, MMM YYYY
        getDayString: function (dateObject) {
            var month = dateObject.getMonth() + 1,
                day = dateObject.getDay(),
                date = dateObject.getDate();

            return days[day] + ', ' + months[month - 1] + ' ' + date;
        },
        // HH:mm
        getTimeString: function (dateObject) {
            var hour = dateObject.getHours(), minutes = dateObject.getMinutes();

            if (hour < 10) hour = '0' + hour;
            if (minutes < 10) minutes = '0' + minutes;

            return [hour, minutes].join(':');
        }
    };

    global.Utils = global.Utils || {};
    global.Utils.Date = DateFuncs;

})(Function('return this')());