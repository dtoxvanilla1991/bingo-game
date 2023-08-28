"use client";
import { useEffect, useState } from "react";

interface OutcomeProps {
  win: boolean;
}
function Outcome(props: OutcomeProps) {
  const [loading, setLoading] = useState<boolean>(true);

  const { win } = props;

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    //cleanup just in case
    return () => {
      clearTimeout(timer);
    };
  }, [win]);

  return (
    <p className="text-center text-xl mt-4">
      {loading
        ? "Game in Progress..."
        : win
        ? "We have survived"
        : "Squid got us killed and our mission failed. Try again!"}
    </p>
  );
}

export default Outcome;
