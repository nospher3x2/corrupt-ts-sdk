import Champion from "./modules/Champion";
import Kassadin from "./modules/champions/Kassadin";

const champions: { [key: string]: Champion } = {
    "Twitch": new Kassadin()
}

cb.add(cb.load, () => {
    const champion = champions[player.skinName]
    if (champion) {
        print(`Loading ${player.skinName} plugin.`);
        champion.load();
    }
});

cb.add(cb.unload, () => {
    const champion = champions[player.skinName]
    if (champion) {
        print(`Unloading ${player.skinName} plugin.`);
        champion.unload();
    }
})