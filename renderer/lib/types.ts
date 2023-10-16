export type Book = {
  id: number;
  title: string;
  author: string;
  renter?: string;
  branch?: Branch;
};

export type Branch = {
  id: number;
  name: string;
};
