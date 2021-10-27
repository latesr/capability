
export interface ICurve {
  name: string;
  current: number;
  target: number;
  start: number;
  duration: number;
};

export class CurveData implements ICurve {
  constructor(public name: string, public current: number, public target: number, public start: number, public duration: number) { }
}

export class CapabilityData {
  constructor(public name: string, public curves: ICurve[]) {
    curves.forEach((c) => {
      if (c.current > 1) {
        c.current /= 100;
      }
      if (c.target > 1) {
        c.target /= 100;
      }
    })
  };
  toString(): string {
    console.log("Called toString");
    var str = `[${this.name}: `;
    str += this.curves.map((_, i) => this.curveToString(i));
    str += ']';
    return str;
  }
  private curveToString(c: number): string {
    return this.curves[c].name + '(' + this.curves[c].current + ',' + this.curves[c].target + ',' + this.curves[c].start + ',' + this.curves[c].duration + ')';
  }
}
