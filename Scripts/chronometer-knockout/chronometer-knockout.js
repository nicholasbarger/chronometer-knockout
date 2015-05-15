ko.bindingHandlers.chronometer = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        var options = prepOptions(value);

        $(element).chronometer(value, options);

        document.addEventListener(element.id + "_updated", function (e) {
            var accessor = valueAccessor();
            accessor.value(e.val);
        });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        var options = prepOptions(value);

        $(element).chronometer(valueUnwrapped, options);
    }
}

function prepOptions(value) {
    var options = {};
    if (value.inputFormat != null) {
        options.inputFormat = value.inputFormat;
    }
    if (value.outputFormat != null) {
        options.outputFormat = value.outputFormat;
    }
    if (value.includeTime != null) {
        options.includeTime = value.includeTime;
    }
    return options;
}