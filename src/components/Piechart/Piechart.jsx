import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import useDonations from "../../hooks/useDonations";

const Piechart = () => {
  const [donations] = useDonations();


  const [allDonation, setAllDonation] = useState(0);
  const [donatePrice, setDonatePrice] = useState(0);

  useEffect(() => {
    const allDonations = donations.reduce(
      (preValue, currentValue) => preValue + currentValue.price,
      0
    );

    const savePrice = JSON.parse(localStorage.getItem("donations"));

    if (savePrice) {
      const saveDonateSum = savePrice.reduce(
        (preValue, currentValue) => preValue + currentValue.price,
        0
      );

      const totalRemaining = Math.abs(allDonations - saveDonateSum);

      setDonatePrice(saveDonateSum);
      setAllDonation(totalRemaining);
    } else {
      setDonatePrice(0);
      setAllDonation(allDonations);
    }
  }, [donations]);

  const result = [allDonation, donatePrice];

  const str = ["Total Donation", "Your Donation"];

  return (
    <div className="container-fluid mb-3 flex justify-center items-center">
      <div>
        <Chart
          type="pie"
          width={370}
          height={350}
          series={result}
          options={{
            colors: ["#FF444A", "#00C49F"],
            noData: { text: "No data" },
            labels: str,
          }}
        />
      </div>
    </div>
  );
};

export default Piechart;