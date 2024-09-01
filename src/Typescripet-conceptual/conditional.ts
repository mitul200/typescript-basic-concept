type TypeA = number;
type TypeB = string;
type TypeC = boolean;

type TypeE = TypeA extends number
  ? number
  : TypeB extends string
  ? string
  : null;
