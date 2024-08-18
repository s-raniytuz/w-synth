import { LinkedNode } from "@/types";

export const WAVEFORM_DEFAULT = "sine";

export const VOLUME_DEFAULT = 30;
export const PAN_DEFAULT = 0;
export const PITCH_DEFAULT = 0;
export const DETUNE_DEFAULT = 0;

export const ATTACK_DEFAULT = 0.01;
export const ATTACK_CURVE_DEFAULT = "linear";

export const DECAY_DEFAULT = 2;
export const DECAY_CURVE_DEFAULT = "exponential";

export const SUSTAIN_DEFAULT = 0;

export const RELEASE_DEFAULT = 1;
export const RELEASE_CURVE_DEFAULT = "exponential";

export const LFO_AMPLITUDE_DEFAULT = 0.5;
export const LFO_LINK_DEFAULT: LinkedNode = "volume";
export const LFO_WAVEFORM_DEFAULT = "sine";
export const LFO_SWITCH_DEFAULT = false;
