import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe(ev => {
    const { sender, message } = ev;
    if (sender.hasTag("test")) {
        ev.cancel = true;
        if (message === ".test") {
            sender.runCommandAsync("say test!!");
        } else if (message === ".test2") {
            sender.runCommandAsync("say test2!");
        } else {
            sender.runCommandAsync(`tellraw @a {"rawtext":[{"text":"<§9${sender.name}§r> ${message}"}]}`);
        }
    }
});
