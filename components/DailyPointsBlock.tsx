"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  points: string;
}

const DailyPointsBlock: React.FC<Props> = ({ points }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow text-center col-span-2">
      <p className="text-gray-500 text-sm mb-1">Daily Points</p>
      <div className="flex items-center justify-center gap-2">
        <span className="text-xl font-semibold">{points}</span>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500 text-lg"
        />
      </div>
    </div>
  );
};

export default DailyPointsBlock;
