/* global window.tangramPlay */

import Widget from "./Widget.js"
import { getAddressSceneContent } from '../../core/codemirror/yaml-tangram.js';

export default class DropDownMenu extends Widget {
    createEl () {
        let el = document.createElement('select');

        el.className = 'tp-widget tp-widget-dropdown';

        for (let value of this.definition.options) {
            let newOption = document.createElement('option');

            if (this.key.value === value) {
                newOption.selected = true;
            }

            newOption.value = value;
            newOption.textContent = value;
            el.appendChild(newOption);
        }

        if (this.definition.source) {
            // TODO: Refactor window.tangramPlay reference
            let obj = getAddressSceneContent(window.tangramPlay.scene, this.definition.source);
            let keys = (obj) ? Object.keys(obj) : {};

            for (let j = 0; j < keys.length; j++) {
                let newOption = document.createElement('option');

                if (this.key.value === keys[j]) {
                    newOption.selected = true;
                }

                newOption.value = keys[j];
                newOption.textContent = keys[j];
                el.appendChild(newOption);
            }
        }

        el.addEventListener('change', (event) => {
            this.setEditorValue(el.options[el.selectedIndex].value);
        });

        return el;
    }
}