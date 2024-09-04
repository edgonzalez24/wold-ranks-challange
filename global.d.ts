// global.d.ts
export {};

declare global {
  interface PiniaState {
    count: number;
  }

  interface RegionItem {
    name: string;
    value: string;
  }
}
