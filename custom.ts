let key = ""
function getKey() {
    if ((ch > -2)&&(ch < 5)) {
        key = "1"
    }
    if ((ch > 62) && (ch < 70)) {
        key = "2"
    }
    if ((ch > 126) && (ch < 136)) {
        key = "3"
    }
    if ((ch > 190) && (ch < 200)) {
        key = "+"
    }
    if ((ch > 252) && (ch < 262)) {
        key = "4"
    }
    if ((ch > 310) && (ch < 330)) {
        key = "5"
    }
    if ((ch > 377) && (ch < 387)) {
        key = "6"
    }
    if ((ch > 442) && (ch < 452)) {
        key = "-"
    }
    if ((ch > 503) && (ch < 513)) {
        key = "7"
    }
    if ((ch > 566) && (ch < 576)) {
        key = "8"
    }
    if ((ch > 630) && (ch < 640)) {
        key = "9"
    }
    if ((ch > 688) && (ch < 698)) {
        key = "*"
    }
    if ((ch > 748) && (ch < 758)) {
        key = "."
    }
    if ((ch > 811) && (ch < 821)) {
        key = "0"
    }
    if ((ch > 874) && (ch < 884)) {
        key = "="
    }
    if ((ch > 935) && (ch < 945)) {
        key = "/"
    }
}