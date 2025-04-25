import React from "react";
import { useRouter } from "next/router";
import { Transaction } from "types/transaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

interface Props {
  transaction: Transaction;
}

const TransactionItem: React.FC<Props> = ({ transaction }) => {
  const router = useRouter();
  const isPayment = transaction.type === "Payment";

  const handleClick = () => {
    router.push(`/transaction/${transaction.id}`);
  };

  const displayAmount = `${isPayment ? "+" : "-"}$${transaction.amount.toFixed(
    2
  )}`;
  const dateFormatted = moment(transaction.date).isAfter(
    moment().subtract(7, "days")
  )
    ? moment(transaction.date).format("dddd")
    : moment(transaction.date).format("MM/DD/YY");

  return (
    <div
      className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <div className="text-sm">
          <p className="font-medium">{transaction.name}</p>
          <p className="text-gray-500 text-xs">
            {transaction.status === "Pending" && "Pending - "}
            {transaction.description}
            {transaction.authorizedUser && ` - ${transaction.authorizedUser}`}
            <br />
            {dateFormatted}
          </p>
        </div>
      </div>
      <div className="text-sm font-semibold text-right">
        <p>{displayAmount}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
