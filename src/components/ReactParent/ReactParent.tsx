import { useState } from "react";
import "./styles.css";
import gradientBackground from "../../images/bg-main-desktop.png";
import CardBack from "../CardBack/CardBack";
import CardFront from "../CardFront/CardFront";
import PaymentForm from "../PaymentForm/PaymentForm";
import PaymentComplete from "../PaymentComplete/PaymentComplete";

const ReactParent = () => {
  const [cardHolderName, setCardHolderName] = useState("Jane Appleseed");
  return (
    <>
      <section
        className='cards'
        style={{
          background: `url(${gradientBackground.src}) top left / cover no-repeat`,
        }}
      >
        <CardFront
          cardHolderName={cardHolderName}
          cardNumber={"0000000000000000"}
          expirationDate={{ month: "0", year: "00" }}
        />
        <CardBack cvc={"000"} />
      </section>
      <section>
        <PaymentForm setCardHolderName={setCardHolderName} />
      </section>
      {/* <section className='confirmation'>
        <PaymentComplete cardHolderName={cardHolderName} />
      </section> */}
    </>
  );
};

export default ReactParent;
