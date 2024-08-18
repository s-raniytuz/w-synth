import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import { LFO_LINK_DEFAULT } from "@/localStorage/localStorageDefaults";
import { synthOneLFOLinkSwitchActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { LinkedNode } from "@/types";

export default function LFOLink() {
  const dispatch = useAppDispatch();

  const linkedNode = useAppSelector(
    (state) => state.synthOneLFOLinkSwitch.link,
  );

  function handleLinkChange(value: LinkedNode) {
    dispatch(synthOneLFOLinkSwitchActions.setLink(value));

    if (value !== LFO_LINK_DEFAULT) {
      localStorage.setItem("synthOneLfoLink", value);
    } else {
      localStorage.removeItem("synthOneLfoLink");
    }
  }

  return (
    <div className="lfo-link flex h-full flex-col items-center justify-between py-[0.4rem]">
      <p
        onDragStart={(e) => e.preventDefault()}
        className="cursor-default select-none font-nohemi text-[0.6rem] font-medium text-centauri-black opacity-85"
      >
        Link
      </p>

      <Select value={linkedNode} onValueChange={handleLinkChange}>
        <SelectTrigger
          onDragStart={(e) => e.preventDefault()}
          className="flex h-8 w-[5rem] select-none items-center justify-center rounded bg-centauri-black text-xs opacity-85"
          showIcon={false}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="volume">&zwnj;Volume</SelectItem>
            <SelectItem value="pan">&zwnj;Pan</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
