$(document).ready(function () {
    let expression = "";

    // Append numbers and operators
    $(".number, .operator").click(function () {
        expression += $(this).data("value");
        $("#display").val(expression);
    });

    // Handle scientific functions
    $(".scientific").click(function () {
        let func = $(this).data("value");

        if (func === "Math.sqrt") {
            expression = `Math.sqrt(${expression})`;
        } else if (func === "Math.pow") {
            expression += "**";
        } else if (func === "Math.PI") {
            expression += "Math.PI";
        } else {
            expression = `${func}(${expression})`;
        }

        $("#display").val(expression);
    });

    // Evaluate expression
    $(".equals").click(function () {
        try {
            expression = eval(expression);
            $("#display").val(expression);
        } catch {
            $("#display").val("Error");
        }
    });

    // Clear display
    $(".clear").click(function () {
        expression = "";
        $("#display").val("");
    });

    // Backspace functionality
    $(".backspace").click(function () {
        expression = expression.slice(0, -1);
        $("#display").val(expression);
    });
});
