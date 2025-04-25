export interface Transaction {
  id: string;
  type: "Payment" | "Credit";
  amount: number;
  name: string;
  description: string;
  date: string;
  status?: "Pending" | "Approved";
  authorizedUser?: string;
}
