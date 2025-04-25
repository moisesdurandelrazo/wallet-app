"use client";
import React from "react";

interface Props {
  balance: number;
  limit: number;
}

const CardBalanceBlock: React.FC<Props> = ({ balance, limit }) => {
  const available = (limit - balance).toFixed(2);
  const formattedBalance = `$${balance.toFixed(2)}`;

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <p className="text-gray-500 text-sm mb-1">Card Balance</p>
      <h2 className="text-2xl font-bold">{formattedBalance}</h2>
      <p className="text-xs text-gray-600">${available} Available</p>
    </div>
  );
};

export default CardBalanceBlock;
