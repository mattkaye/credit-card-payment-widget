import { useRef, useEffect } from "react";
import "./styles.css";

const PaymentForm = ({
  setCardHolderName,
}: {
  setCardHolderName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const cardHolderNameField = useRef<HTMLInputElement>(null);

  const updateCardHolderName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[A-Za-z\s]$/;
    if (e.key === "Backspace" || regex.test(e.key)) {
      setCardHolderName((prev) => {
        if (cardHolderNameField.current !== null) {
          return cardHolderNameField.current.value;
        }
        return prev;
      });
    } else {
      // Remove anything extra on blur?
    }
  };

  return (
    <form>
      <label htmlFor='cardholderName'>
        <p>Cardholder Name</p>
        <input
          ref={cardHolderNameField}
          type='text'
          id='cardholderName'
          placeholder='e.g: Jane Appleseed'
          onKeyUp={updateCardHolderName}
        />
      </label>
      <label htmlFor='cardNumber'>
        <p>Card Number</p>
        <input
          type='text'
          inputMode='numeric'
          id='cardNumber'
          placeholder='e.g: 1234 5678 9123 0000'
        />
      </label>

      <div className='metadata'>
        <label htmlFor='expirationMonth'>
          <p>Expiration Date</p>
          <div>
            <input
              type='text'
              inputMode='numeric'
              id='expirationMonth'
              placeholder='MM'
            />
            <label className='screenreader' htmlFor='expirationYear'>
              Expiration Year
            </label>
            <input
              type='text'
              inputMode='numeric'
              id='expirationYear'
              placeholder='YY'
            />
          </div>
        </label>
        <label htmlFor='cvc'>
          <p>CVC</p>
          <div>
            <input
              type='text'
              inputMode='numeric'
              id='cvc'
              placeholder='e.g: 123'
            />
          </div>
        </label>
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default PaymentForm;
