let ch = 0
let sequence = ""
let sequence2 = ""
let result = 0
let OPSY = ""
let status = 1
let ST_wait = 1
let ST_num1 = 2
let ST_OPSY = 3
let ST_wait2 = 4
let ST_num2 = 5
let ST_calculation = 6
let ST_writeResult = 7
basic.forever(function () {
    mainProgram()
})
function mainProgram() {
    switch (status) {
        case ST_wait:
            ch = pins.analogReadPin(AnalogPin.P0)
            if ((ch > 1000)&&(ch <1010)) {
                while ((ch > 1000)&&(ch <1010)) {
                    ch = pins.analogReadPin(AnalogPin.P0)
                    control.waitMicros(500)
                }
                if ((ch > 1000)&&(ch <1010)) {
                    control.waitMicros(500)
                    status = ST_num1
                }
                break
            } else {
                control.waitMicros(500)
                status = ST_num1
            }
            break
        case ST_num1:
//            basic.showString("n1")
            getKey()
            if(key == "="){
                basic.showString("Failed!")
                status = ST_wait
            } else if ((key == "+")||(key == "-")||(key == "*")||(key == "/")) {
                status = ST_OPSY;
            } else {
                basic.showString(key)
                sequence = sequence + key
                status = ST_wait
            }
            break
        case ST_OPSY:
            if(key == "+"){
                OPSY = "+"
            } else if (key == "-"){
                OPSY = "-"
            } else if(key == "*"){
                OPSY = "*"
            } else if(key == "/"){
                OPSY = "/"
            }
            basic.showString(OPSY)
            status = ST_wait2
            break
            case ST_wait2:
                ch = pins.analogReadPin(AnalogPin.P0)
                if ((ch > 1000)&&(ch <1010)) {
                    while ((ch > 1000)&&(ch <1010)) {
                        ch = pins.analogReadPin(AnalogPin.P0)
                        control.waitMicros(500)
                    }  
                    if ((ch > 1000)&&(ch <1010)) {
                        control.waitMicros(500)
                        status = ST_num2
                    }
                    break
                } else {
                    control.waitMicros(500)
                    status = ST_num2
                }   
                break
            case ST_num2:
                getKey()
                if(key == "="){
                    status = ST_calculation
                    break
                } else if((key == "+")||(key == "-")||(key == "/")||(key == "*")){
                    basic.showString("Failed")
                    status = ST_wait2
                    break
                } else {
                basic.showString(key)
                sequence2 = sequence2 + key
                status = ST_wait2
                }
            break
            case ST_calculation:
                let sequence_result = parseFloat(sequence)
                let sequence_result2 = parseFloat(sequence2)
                if (OPSY == "+") {
                    result = sequence_result + sequence_result2
                    status = ST_writeResult
                    break
                }
               if (OPSY == "-") {
                    result = sequence_result - sequence_result2
                    status = ST_writeResult
                    break
                }
                if (OPSY == "/") {
                    result = sequence_result / sequence_result2
                    status = ST_writeResult
                    break
                }
                if (OPSY == "*") {
                    result = sequence_result * sequence_result2
                    status = ST_writeResult
                    break
                }
                break
            case ST_writeResult:
                basic.showNumber(result)
                sequence = ""
                sequence2 = ""
                OPSY = ""
                status = ST_wait
                break
    }
}