import { useState } from "react";
import "../App.css";

function TotalSumCounted(props) {
  return (
    <div>
      <h2 className="message_title">Työ maksaa {props.totalSum.toFixed(2)}€</h2>
    </div>
  );
}

function Price_form() {
  const [show, setShow] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const [information, setInformation] = useState({
    Yarn_amount: 0,
    Yarn_price: 0,
    Hourly_rate: 0,
    Hours_spent: 0,
    Minutes_spent: 0,
  });

  const onChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };
  const doSubmit = async (e) => {
    e.preventDefault();
    console.log(information);
    const counting_info = {
      ...information,
      Yarn_amount: Number(information.Yarn_amount),
      Yarn_price: Number(information.Yarn_price),
      Hourly_rate: Number(information.Hourly_rate),
      Hours_spent: Number(information.Hours_spent),
      Minutes_spent: Number(information.Minutes_spent),
    };
    const cost_of_yarn = counting_info.Yarn_amount * counting_info.Yarn_price;
    //Muunnetaan aika minuuteiksi
    const total_hours = counting_info.Hours_spent * 60;
    const total_time = total_hours + counting_info.Minutes_spent;

    //Muunnetaan tuntihinta sopimaan minuuteille
    const rate_per_minute = counting_info.Hourly_rate / 60;
    const cost_of_labor = total_time * rate_per_minute.toFixed(3);

    const total_sum = cost_of_labor + cost_of_yarn;
    setTotalSum(total_sum);
    setShow(true);

  };

  return (
    <>
      <div className="informationForm">
        <h2>Laskuri virkkaustyön hinnoittelulle</h2>
        <h4>Tiedot</h4>
        <form onSubmit={(e) => doSubmit(e)}>
          <div className="addInformation_form">
            <label className="label_add" htmlFor="Yarn_amount">
              Lankakerien määrä:
            </label>
            <input
              type="number"
              id="Yarn_amount"
              name="Yarn_amount"
              onChange={onChange}
              required
            ></input>
            <br />
            <label className="label_add" htmlFor="Yarn_price">
              Lankakerän hinta:
            </label>
            <input
              type="number"
              id="Yarn_price"
              name="Yarn_price"
              onChange={onChange}
              step=".01"
              required
            ></input>
            €<br />
            <label className="label_add" htmlFor="Hourly_rate">
              Tuntihinta:
            </label>
            <input
              type="number"
              id="Hourly_rate"
              name="Hourly_rate"
              onChange={onChange}
              step=".01"
              min="0"
              max="999"
              required
            ></input>
            €/h
            <br />
            <label className="label_add" htmlFor="Time_spent">
              Työhön käytetty aika:
            </label>
            <input
              type="number"
              id="Hours_spent"
              name="Hours_spent"
              onChange={onChange}
              required
            ></input>{" "}
            h
            <input
              type="number"
              id="Minutes_spent"
              name="Minutes_spent"
              min="0"
              max="59"
              onChange={onChange}
              required
            ></input>{" "}
            min
            <br />
          </div>
          <input type="submit" className="submitButton" value="Laske hinta" />
        </form>
        {show && <TotalSumCounted totalSum={totalSum} />}
      </div>
    </>
  );
}

export default Price_form;
