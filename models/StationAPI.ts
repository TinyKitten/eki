type LineSymbols = {
  lineSymbol: string;
};

export interface Station {
  prefId: number;
  name: string;
  lines: Line[];
  address: string;
}

export interface Line {
  id: number;
  lineColorC: string | null;
  name: string;
  lineSymbols: LineSymbols[];
}
