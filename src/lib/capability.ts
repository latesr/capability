import { writable } from "svelte/store";

export interface CapabilityParams {
  current: number;
  target: number;
  start: number;
  duration: number;
}
const initial: CapabilityParams = {
  current: 25,
  target: 50,
  start: 0,
  duration: 36,
};

export const params = writable(initial, (set) => {
  console.log("Subscribed");
  return () => console.log("unsubscribed");
});