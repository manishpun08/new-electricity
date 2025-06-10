export interface ITeam {
  data: ITeamData;
}

export interface ITeamData {
  records: ITeamRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: string;
  next: string;
  recordShown: number;
}

export interface ITeamRecord {
  id: string;
  ordering: number;
  name: string;
  designation: string;
  email: string;
  message: string;
  image: string;
  is_chairperson: boolean;
}
