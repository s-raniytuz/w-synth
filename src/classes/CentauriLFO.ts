import { InputNode, LFO, LFOOptions } from "tone";
import { store } from "@/store";
import { LinkedNode } from "@/types";

export class CentauriLFO extends LFO {
  constructor(options?: Partial<LFOOptions>) {
    super(options);

    this.set({
      min: this.getLFOMin(store.getState().synthOneLFOLinkSwitch.link),
      max: this.getLFOMax(store.getState().synthOneLFOLinkSwitch.link),
    });

    store.subscribe(() => {
      if (
        store.getState().synthOneLFOLinkSwitch.link === "volume" &&
        store.getState().synthOneVolume.volume !== this.get().max
      ) {
        this.set({
          max: store.getState().synthOneVolume.volume,
        });
      }
    });
  }

  dynamicConnect(node: InputNode) {
    if (store.getState().synthOneLFOLinkSwitch.link === "volume") {
      this.set({
        min: 0,
      });
    } else if (store.getState().synthOneLFOLinkSwitch.link === "pan") {
      this.set({
        min: -1,
        max: 1,
      });
    }

    this.connect(node);
  }

  getLFOMin(type: LinkedNode) {
    if (type === "volume") {
      return -10;
    } else if (type === "pan") {
      return -1;
    }
  }

  getLFOMax(type: LinkedNode) {
    if (type === "volume") {
      return store.getState().synthOneVolume.volume;
    } else if (type === "pan") {
      return 1;
    }
  }
}
