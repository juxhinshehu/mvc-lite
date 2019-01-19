(function (global) {

    global.App.Injectable('bind-class', {
        // Options
        justModify: true,

        // Functions
        getter: function (statement, comp) {
            var classes = global.Utils.String.toDictionary(statement),
                value;
            for (var className in classes) if (classes.hasOwnProperty(className)) {
                value = comp.evalWithScope(classes[className]);
                classes[className] = !!value;
            }
            return classes;
        },
        modifier: function (compNode, value) {
            var total = 0;
            for (var className in value) if (value.hasOwnProperty(className)) {
                if (value[className]) {
                    compNode.self.classList.add(className);
                    total++;
                } else
                    compNode.self.classList.remove(className);
            }
            if (total === 0 && compNode.self.classList.length === 0)
                compNode.self.removeAttribute('class');
        }
    });

})(Function('return this')());