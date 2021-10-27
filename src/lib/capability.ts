
export interface ICurve {
  name: string;
  current: number;
  target: number;
  start: number;
  duration: number;
};

export interface ICapability {
  name: string;
  curves: ICurve[];
}

export class CurveData implements ICurve {
  constructor(public name: string, public current: number, public target: number, public start: number, public duration: number) { }
}

export class CapabilityData implements ICapability {
  constructor(public name: string, public curves: ICurve[]) { };
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
