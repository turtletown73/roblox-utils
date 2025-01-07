let games = document.getElementsByClassName("QuickLaunchGame");
let privates = document.getElementsByClassName("QuickLaunchPrivate");

for (let i = 0; i < games.length; i++) {
    placeId = games.item(i).getAttribute("placeId");

    games.item(i).onclick = function() {
        window.location.href = `roblox://placeId=${placeId}/`
    }
}

for (let i = 0; i < privates.length; i++) {
    placeId = privates.item(i).getAttribute("placeId");
    linkCode = privates.item(i).getAttribute("linkCode");

    privates.item(i).onclick = function() {
        window.location.href = `roblox://placeId=${placeId}&linkCode=${linkCode}/`
    }
}