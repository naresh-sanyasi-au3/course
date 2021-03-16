// "http://localhost:3000/add?num1=5&num2=3"

function params(url) {
    var readKeys = false
    var readValues = false
    var keyStart, keyEnd
    var valueStart, valueEnd
    var valuesArray = []
    var keysArray = []
    var paramsObj = {}

    for (var i = 0; i < url.length; i++) {
        var char = url[i];
        if (char == '?' || char == '&' || readKeys == true) {
            if (readKeys == false) {
                readKeys = true
                keyStart = i + 1
            }
            if (char == '=') {
                keyEnd = i
                keysArray.push(url.substring(keyStart, keyEnd))
                readKeys = false
            }
        }
        if (char == '=' || readValues == true) {
            if (readValues == false) {
                readValues = true
                valueStart = i + 1
            }
            if (char == '&') {

                valueEnd = i
                valuesArray.push(url.substring(valueStart, valueEnd))
                readValues = false
            }
            else if (i == url.length - 1) {
                valueEnd = i + 1
                valuesArray.push(url.substring(valueStart, valueEnd))
                readValues = false
            }
        }
    }
    for (var i = 0; i < keysArray.length; i++) {
        paramsObj[keysArray[i]] = valuesArray[i]
    }

    return paramsObj
}

console.log(params("http://localhost:3000/add?num1=5&num2=3"))
