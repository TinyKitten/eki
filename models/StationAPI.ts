export interface APITrainTypeMinimum {
  id: number;
  typeId: number;
  groupId: number;
  name: string;
  nameK: string;
  nameR: string;
  nameZh: string;
  nameKo: string;
  color: string;
  line: Line;
}
export interface APITrainType {
  id: number;
  typeId: number;
  groupId: number;
  name: string;
  nameK: string;
  nameR: string;
  nameZh: string;
  nameKo: string;
  stations: Station[];
  color: string;
  allTrainTypes: APITrainTypeMinimum[];
  lines: Line[];
}

export interface Station {
  id: number;
  groupId: number;
  prefId: number;
  name: string;
  nameK: string;
  nameR: string;
  nameZh: string;
  nameKo: string;
  nameForSearch?: string;
  nameForSearchR?: string;
  address: string;
  lines: Line[];
  latitude: number;
  longitude: number;
  distance?: number;
  trainTypes: APITrainType[];
  pass?: boolean;
  __typename: "Station";
}

export enum LineType {
  Other,
  BulletTrain,
  Normal,
  Subway,
  Tram,
  Monorail,
  AGT,
}

export interface Company {
  nameR: string;
  nameEn: string;
}

export interface Line {
  id: number;
  companyId: number;
  lineColorC: string | null;
  name: string;
  nameR: string;
  nameK: string;
  nameZh: string;
  nameKo: string;
  lineType: LineType;
  company: Company;
  __typename: "Line";
}
