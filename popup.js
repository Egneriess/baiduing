window.onload = function () {
    var btn = document.getElementById("button");

    btn.onclick = function () {
        var text = document.getElementById("text").value;
        if (text !== '') {
            var url = "https://www.baidu.com/s?wd=" + text;
            window.open(url, "_blank");
        }
    }
    document.onkeydown = function (ev) {
        var event = ev || event
        if (event.keyCode === 13) {
            var text = document.getElementById("text").value;
            if (text !== '') {
                var url = "https://www.baidu.com/s?wd=" + text;
                window.open(url, "_blank");
            }
        }
    }
}