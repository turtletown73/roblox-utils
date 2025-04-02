if (!localStorage.getItem("launcherItems")) {localStorage.setItem("launcherItems", JSON.stringify({privateServers:[],games:[]}));}
let launcherItems = JSON.parse(localStorage.getItem("launcherItems"));

for (let i = 0; i < launcherItems.games.length; i++) {
    let game = document.createElement("button");
    game.classList.add("QuickLaunchGame");
    game.setAttribute("placeId", launcherItems.games[i].code);
    game.innerText = launcherItems.games[i].name;
    document.getElementById("QuickLaunchList").appendChild(game);
}

for (let i = 0; i < launcherItems.privateServers.length; i++) {
    let game = document.createElement("button");
    game.classList.add("QuickLaunchPrivate");
    game.setAttribute("shareCode", launcherItems.privateServers[i].code);
    game.innerText = launcherItems.privateServers[i].name;
    document.getElementById("QuickLaunchList").appendChild(game);
}

let games = document.getElementsByClassName("QuickLaunchGame");
let privates = document.getElementsByClassName("QuickLaunchPrivate");

for (let i = 0; i < games.length; i++) {
    placeId = games.item(i).getAttribute("placeId");

    games.item(i).onclick = function() {
        window.location.href = `roblox://placeId=${placeId}/`
    }
}

for (let i = 0; i < privates.length; i++) {
    shareCode = privates.item(i).getAttribute("shareCode");

    privates.item(i).onclick = function() {
        window.location.href = ` roblox://navigation/share_links?code=${shareCode}&type=Server`
    }
}

document.getElementById("addQuickLaunch").onclick = function() {
    let link = document.getElementById("quickLaunchLink").value;
    let name = document.getElementById("quickLaunchName").value;
    if (link.startsWith("https://www.roblox.com/share?code=")) {
        let code = link.split("https://www.roblox.com/share?code=")[1].split("&")[0];
        let value = {code: code, name: name};
        let launcherItems = JSON.parse(localStorage.getItem("launcherItems"));
        launcherItems.privateServers.push(value);
        localStorage.setItem("launcherItems", JSON.stringify(launcherItems));
    } else if (link.startsWith("https://www.roblox.com/games/")) {
        let code = link.split("https://www.roblox.com/games/")[1].split("/")[0];
        let value = {code: code, name: name};
        let launcherItems = JSON.parse(localStorage.getItem("launcherItems"));
        launcherItems.games.push(value);
        localStorage.setItem("launcherItems", JSON.stringify(launcherItems));
    }

    document.getElementById("quickLaunchLink").value = "";
    document.getElementById("quickLaunchName").value = "";

    window.location.reload();
}