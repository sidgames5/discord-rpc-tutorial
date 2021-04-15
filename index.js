const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Group game: Sneakwars",
        state: "In workspace",
        largeImageKey: "robloxstudio",
        largeImageText: "Roblox Studio"
    })

    console.log("RPC Active");
});

rpc.login({
    clientId: "831972902420217897"
})