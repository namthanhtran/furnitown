function Validator(options) {

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            console.log(inputElement);
            if (inputElement) {
                inputElement.onblur = function() {
                    if (inputElement.value == '')
                }
            }
        })
    }
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'vui lòng nhập trường này!'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'vui lòng nhập trường này!'
        }
    }
}