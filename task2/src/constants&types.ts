// I'm fetching users with the mock API but I'm keeping the naming consistent to product for the purpose of this assignment
export type ProductType = {
  name: string;
  username: string;
  email: string;
  website: string;
};

export const COLUMN_NAMES = ["name", "username", "email", "website"] as const;
