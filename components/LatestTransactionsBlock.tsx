"use client";
import React from "react";
import { Transaction } from "types/transaction";
import TransactionItem from "./TransactionItem";

interface Props {
  transactions: Transaction[];
}

const LatestTransactionsBlock: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Latest Transactions</h2>
      {transactions.map((tx) => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
};

export default LatestTransactionsBlock;
