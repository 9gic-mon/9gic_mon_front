export interface CoUserData {
  coUserEmail: string;
  coUserPassword: string;
  coUserCopname: string;
  coUserTell: string;
}

export interface SignInCoUser {
  coUserEmail: string;
  coUserPassword: string;
}

export interface SearchCreteria {
  filtering: string;
  grade: 0 | 1 | 2 | 3;
  region: "대전" | "경기" | "서울" | "0";
  subject: string;
}
