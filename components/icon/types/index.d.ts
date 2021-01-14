import type { SvelteComponentTyped } from "svelte/internal";

export interface IconProps {
  type: string;
  stroke?: string;
  style?: string;
}

export interface IconEvents {
  click?: void;
}

declare class Icon extends SvelteComponentTyped<IconProps, IconEvents> {}

export default Icon;
