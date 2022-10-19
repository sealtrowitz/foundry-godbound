import {SafeNum} from "./misc.js";

export class PlayerAttributeRollDialog extends Dialog {
    static async create(actor, opts, onComplete) {
        let dialogContent = 'systems/godbound/templates/dialogues/player-attribute-roll-dialog-content.html';

        let template = await renderTemplate(dialogContent,
            Object.assign({}, opts)
        );
        new PlayerAttributeRollDialog(actor, {content: template}, onComplete, opts).render(true);
    }

    constructor(actor, dialogData, onComplete, opts) {
        dialogData = Object.assign({
            title: `Roll`,
            buttons: {
                yes: {
                    icon: "<i class='fas fa-check'></i>",
                    label: `Roll`,
                    callback: (html) => {
                        let modifier = SafeNum(html.find('#modifier').val());
                        let factModifier = SafeNum(html.find('#factModifier').val());
                        onComplete(Object.assign({}, opts, {
                            modifier,
                            factModifier
                        }));
                    }
                },
                no: {
                    icon: "<i class='fas fa-times'></i>",
                    label: `Cancel`
                }
            },
            default: 'yes'
        }, dialogData);
        super(dialogData);
        this.actor = actor;
    }

    activateListeners(html) {
        super.activateListeners(html);
    }
}