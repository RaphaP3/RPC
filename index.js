const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () =>
{
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Descansando um Pouco...",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: ("zzz"),
                large_text: "A Mimir..."
            },
        }
    });

    console.log("Agora você está dormindo...");
});

client.login({
    clientId: '829672983593222175',
});
