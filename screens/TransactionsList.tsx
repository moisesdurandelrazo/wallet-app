"use client";
import { useEffect, useState } from "react";
import { Transaction } from "types/transaction";
import { calculatePoints, formatPoints } from "utils/calculatePoints";
import CardBalanceBlock from "components/CardBalanceBlock";
import DailyPointsBlock from "components/DailyPointsBlock";
import LatestTransactionsBlock from "components/LatestTransactionsBlock";

const TransactionsList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cardBalance, setCardBalance] = useState<number>(17.3);
  const cardLimit = 1500;
  const today = new Date();
  const seasonStart = new Date("2025-03-21");
  const dayOfSeason =
    Math.ceil((today.getTime() - seasonStart.getTime()) / (1000 * 3600 * 24)) +
    1;

  useEffect(() => {
    fetch("/data/transactions.json")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const totalBalance = transactions.reduce((acc, tx) => {
    return tx.type !== "Payment" ? acc + tx.amount : acc - tx.amount;
  }, 0);
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-2">
        <CardBalanceBlock balance={totalBalance} limit={cardLimit} />
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-gray-500 text-sm">No Payment Due</p>
          <p className="font-semibold">You’ve paid your September balance.</p>
        </div>
        <DailyPointsBlock points={formatPoints(calculatePoints(dayOfSeason))} />
      </div>

      <LatestTransactionsBlock transactions={transactions.slice(0, 10)} />
    </div>
  );
};

export default TransactionsList;
