let tools = document.getElementsByClassName("tool");

for (let i = 0; i < tools.length; i++) {
    src = tools.item(i).getAttribute("src");

    tools.item(i).onclick = function() {
        window.location.assign(src)
    }
}