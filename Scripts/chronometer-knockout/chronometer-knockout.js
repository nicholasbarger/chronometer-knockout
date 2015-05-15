ko.bindingHandlers.chronometer = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        var options = prepOptions(allBindings);

        $(element).chronometer(value, options);

        document.addEventListener(element.id + "_updated", function (e) {
            var accessor = valueAccessor();
            accessor(e.val);
        });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        var options = prepOptions(allBindings);

        $(element).chronometer(valueUnwrapped, options);
    }
}

function prepOptions(allBindings) {
    var options = {};
    options.inputFormat = allBindings.get('chronometerInputFormat');
    options.outputFormat = allBindings.get('chronometerOutputFormat');
    options.includeTime = allBindings.get('chronometerIncludeTime') || false;
    return options;
}