let emni: any;

emni = 34;

emni as number;

// alternative away to write
<number>emni;

function kgToGaram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const valueman = parseFloat(param) * 1000;
    return valueman;
  }
  if (typeof param === "number") {
    const value = param * 100;
    return value;
  }
}

const kgToGaramStreing = kgToGaram("1000") as string;

const kgToGaramNumber = kgToGaram(1000) as number;
