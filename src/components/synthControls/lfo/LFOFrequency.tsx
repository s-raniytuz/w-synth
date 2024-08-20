import PositionSlider from "@/components/custom-ui/slider/PositionSlider";
import { useLFOContext } from "@/context/LFOContext";
import useMountEffect from "@/hooks/useMountEffect";
import { LFO_FREQUENCY_DEFAULT } from "@/localStorage/localStorageDefaults";
import { synthOneLFOMainControlsActions } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Frequency } from "tone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";

export default function LFOFrequency() {
  const dispatch = useAppDispatch();
  const frequency = useAppSelector(
    (state) => state.synthOneLFOMainControls.frequency,
  );
  const unit = useAppSelector(
    (state) => state.synthOneLFOMainControls.frequencyUnit,
  );
  const lfo = useLFOContext();

  useMountEffect(() => {
    lfo.frequency.value = frequency;
  });

  function handleFrequencyChange(value: number) {
    lfo.frequency.value = value;
    dispatch(synthOneLFOMainControlsActions.setFrequency(value));
    if (value !== Frequency(LFO_FREQUENCY_DEFAULT).toFrequency()) {
      localStorage.setItem("synthOneLfoFrequency", value.toString());
    } else {
      localStorage.removeItem("synthOneLfoFrequency");
    }
  }

  function handleTimeChange(value: string) {
    lfo.frequency.value = value;
    dispatch(synthOneLFOMainControlsActions.setFrequency(value));
    if (value !== Frequency(LFO_FREQUENCY_DEFAULT).toNotation()) {
      localStorage.setItem("synthOneLfoFrequency", value.toString());
    } else {
      localStorage.removeItem("synthOneLfoFrequency");
    }
  }

  console.log(Frequency(frequency).toNotation());

  return (
    <div className="lfo-frequency flex h-[40%] w-full">
      <div className="lfo-frequency-slider -mt-1 flex h-full w-[50%] flex-col items-center justify-center gap-1">
        <p
          onDragStart={(e) => e.preventDefault()}
          className="cursor-default select-none font-nohemi text-[0.6rem] font-medium text-centauri-black opacity-85"
        >
          Frequency
        </p>
        {unit === "frequency" ? (
          <PositionSlider
            type="lfo"
            defaultValue={Frequency(LFO_FREQUENCY_DEFAULT).toFrequency()}
            initValue={Frequency(frequency).toFrequency()}
            min={0.1}
            max={30}
            className="h-8 w-full rounded bg-centauri-black"
            onChange={handleFrequencyChange}
          />
        ) : (
          <Select
            value={Frequency(frequency).toNotation().toString()}
            onValueChange={handleTimeChange}
          >
            <SelectTrigger
              onDragStart={(e) => e.preventDefault()}
              showIcon={false}
              className="text-500 flex h-8 w-full cursor-pointer select-none justify-center rounded bg-centauri-black"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Time Subdivision</SelectLabel>
                <SelectItem value="1m">&zwnj;Bar</SelectItem>
                <SelectItem value="1n">&zwnj;1</SelectItem>
                <SelectItem value="1n.">&zwnj;1 Dotted</SelectItem>
                <SelectItem value="1t">&zwnj;1 Triplet</SelectItem>
                <SelectItem value="2n">&zwnj;1/2</SelectItem>
                <SelectItem value="2n.">&zwnj;1/2 Dotted</SelectItem>
                <SelectItem value="2t">&zwnj;1/2 Triplet</SelectItem>
                <SelectItem value="4n">&zwnj;1/4</SelectItem>
                <SelectItem value="4n.">&zwnj;1/4 Dotted</SelectItem>
                <SelectItem value="4t">&zwnj;1/4 Triplet</SelectItem>
                <SelectItem value="8n">&zwnj;1/8</SelectItem>
                <SelectItem value="8n.">&zwnj;1/8 Dotted</SelectItem>
                <SelectItem value="8t">&zwnj;1/8 Triplet</SelectItem>
                <SelectItem value="16n">&zwnj;1/16</SelectItem>
                <SelectItem value="16n.">&zwnj;1/16 Dotted</SelectItem>
                <SelectItem value="16t">&zwnj;1/16 Triplet</SelectItem>
                <SelectItem value="32n">&zwnj;1/32</SelectItem>
                <SelectItem value="32n.">&zwnj;1/32 Dotted</SelectItem>
                <SelectItem value="32t">&zwnj;1/32 Triplet</SelectItem>
                <SelectItem value="64n">&zwnj;1/64</SelectItem>
                <SelectItem value="64n.">&zwnj;1/64 Dotted</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="frequency-unit-selector h-full w-[50%]">
        <RadioGroup
          defaultValue={unit}
          className="flex h-full w-full justify-between"
        >
          <div className="frequency-unit flex flex-col">
            <Label htmlFor="radio-frequency" className="text-[0.5rem]">
              Frequency
            </Label>
            <RadioGroupItem
              value="frequency"
              id="radio-frequency"
              className="h-5 w-5 border-2 border-black"
            />
          </div>
          <div className="time-unit flex flex-col">
            <Label htmlFor="radio-time">Time</Label>
            <RadioGroupItem
              value="time"
              id="radio-time"
              className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            ></RadioGroupItem>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
