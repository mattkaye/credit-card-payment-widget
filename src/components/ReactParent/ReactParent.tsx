import { useState } from "react";
import "./styles.css";
import gradientBackground from "../../images/bg-main-desktop.png";
import CardBack from "../CardBack/CardBack";
import CardFront from "../CardFront/CardFront";
import PaymentForm from "../PaymentForm/PaymentForm";
import PaymentComplete from "../PaymentComplete/PaymentComplete";

const ReactParent = () => {
  const [cardHolderName, setCardHolderName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [expirationDate, setExpirationDate] = useState({
    month: "0",
    year: "00",
  });
  const [CVC, setCVC] = useState("000");
  const [formComplete, setFormComplete] = useState(false);

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
          cardNumber={cardNumber}
          expirationDate={expirationDate}
        />
        <CardBack cvc={CVC} />
      </section>

      {!formComplete && (
        <>
          <section>
            <PaymentForm
              setCardHolderName={setCardHolderName}
              setCardNumber={setCardNumber}
              setExpirationDate={setExpirationDate}
              setCVC={setCVC}
              setFormComplete={setFormComplete}
            />
          </section>
        </>
      )}

      {formComplete && (
        <section className='confirmation'>
          <PaymentComplete cardHolderName={cardHolderName} />
        </section>
      )}
    </>
  );
};

export default ReactParent;
