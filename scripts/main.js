import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe(ev => {
    const { sender, message } = ev;

    if (sender.hasTag("test")) {
        if (message === ".test") {
            ev.cancel = true;
            sender.runCommandAsync("say test!!");
        } else if (message === ".test2") {
            ev.cancel = true;
            sender.runCommandAsync("say test2!");
        } else if (1 === 1) {
            ev.cancel = true;
            sender.runCommandAsync(`tellraw @a {"rawtext":[{"text":"<§9${sender.name}§r> ${message}"}]}`)
        }
    }
});