export const toRadian = (angle:number) => {
  return angle * Math.PI / 180;
}

export const clamp = (num:number, min:number, max:number) => {
  return Math.min(Math.max(num, min), max);
}

export const preventDefaultWheel = (e: globalThis.WheelEvent):void => {
  e.preventDefault();
}