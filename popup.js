window.onload = function () {
    const btn = document.getElementById("button");

    btn.onclick = function () {
        openURL();
    }
    document.onkeydown = function (ev) {
        const event = ev || event;
        if (event.key === "Enter") {
            openURL();
        }
    }
}

function getRadioButtonChecked(tagNameAttr) {
    const radio = document.getElementsByName(tagNameAttr);
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
}

function openURL() {
    const radio = getRadioButtonChecked("search");
    const text = document.getElementById("text").value;
    if (text !== '') {
        let url;
        switch (radio) {
            case "百度":
                url = "https://www.baidu.com/s?wd=" + text;
                break
            case "百科":
                url = "https://baike.baidu.com/search/none?word=" + text;
                break
            case "图片":
                url = "https://image.baidu.com/search/index?tn=baiduimage&word=nihao" + text;
                break
        }
        window.open(url, "_blank");
    }
}