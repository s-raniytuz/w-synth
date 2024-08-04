import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import { useLinkedNodeContext } from "@/context/LFOContext";
import { LinkedNode } from "@/types";

export default function LFOLink() {
  const { linkedNode, setLinkedNode } = useLinkedNodeContext();

  function handleLinkChange(value: string) {
    setLinkedNode(value as LinkedNode);
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
