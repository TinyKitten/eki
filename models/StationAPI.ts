type LineSymbols = {
  lineSymbol: string;
};

export interface Station {
  prefId: number;
  name: string;
  lines: Line[];
  __typename: "Station";
}

export interface Line {
  id: number;
  lineColorC: string | null;
  name: string;
  lineSymbols: LineSymbols[];
  __typename: "Line";
}
