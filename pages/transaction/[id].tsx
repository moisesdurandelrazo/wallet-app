import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Transaction } from "types/transaction";
import moment from "moment";

const TransactionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch("/data/transactions.json")
      .then((res) => res.json())
      .then((data: Transaction[]) => {
        const found = data.find((tx) => tx.id === id);
        if (found) setTransaction(found);
      });
  }, [id]);

  if (!transaction) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 max-w-md mx-auto">
      <button
        className="text-blue-600 text-sm mb-4"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">${transaction.amount.toFixed(2)}</h1>
        <p className="text-lg font-medium">{transaction.name}</p>
        <p className="text-sm text-gray-500">
          {moment(transaction.date).format("MM/DD/YY, HH:mm")}
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow space-y-2">
        <p>
          <span className="font-semibold">Status:</span>{" "}
          {transaction.status || "Approved"}
        </p>
        <p>
          <span className="font-semibold">From:</span> {transaction.description}
        </p>
        {transaction.authorizedUser && (
          <p>
            <span className="font-semibold">Authorized by:</span>{" "}
            {transaction.authorizedUser}
          </p>
        )}
        <hr />
        <p>
          <span className="font-semibold">Total:</span> $
          {transaction.amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TransactionDetail;
