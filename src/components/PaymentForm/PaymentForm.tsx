import { type SetStateAction } from "react";
import InputMask from "react-input-mask";
import "./styles.css";

const PaymentForm = ({
  setCardHolderName,
  setCardNumber,
  setExpirationDate,
  setCVC,
}: {
  setCardHolderName: React.Dispatch<React.SetStateAction<string>>;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setExpirationDate: React.Dispatch<
    React.SetStateAction<{ month: string; year: string }>
  >;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <form>
      <label htmlFor='cardholderName'>
        <p>Cardholder Name</p>
        <InputMask
          required
          id='cardholderName'
          placeholder='e.g: Jane Appleseed'
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            const inputLen = e.target.value.length;
            setCardHolderName(inputLen ? e.target.value : "Jane Appleseed");
          }}
        />
      </label>
      <label htmlFor='cardNumber'>
        <p>Card Number</p>
        <InputMask
          required
          mask='9999 9999 9999 9999'
          inputMode='numeric'
          maskPlaceholder={null}
          placeholder='e.g: 1234 5678 9123 0000'
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            const inputLen = e.target.value.length;
            setCardNumber(inputLen ? e.target.value : "0000 0000 0000 0000");
          }}
        />
      </label>

      <div className='metadata'>
        <label htmlFor='expirationMonth'>
          <p>Expiration Date</p>
          <div>
            <InputMask
              id='expirationMonth'
              mask='99'
              inputMode='numeric'
              maskPlaceholder={null}
              placeholder='MM'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const inputLen = e.target.value.length;
                setExpirationDate((prev: { month: string; year: string }) => {
                  return { ...prev, month: inputLen ? e.target.value : "0" };
                });
              }}
            />
            <label className='screenreader' htmlFor='expirationYear'>
              Expiration Year
            </label>
            <InputMask
              id='expirationYear'
              mask='99'
              inputMode='numeric'
              maskPlaceholder={null}
              placeholder='YY'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const inputLen = e.target.value.length;
                setExpirationDate((prev: { month: string; year: string }) => {
                  return { ...prev, year: inputLen ? e.target.value : "00" };
                });
              }}
            />
          </div>
        </label>
        <label htmlFor='cvc'>
          <p>CVC</p>
          <div>
            <InputMask
              id='cvc'
              mask='999'
              inputMode='numeric'
              maskPlaceholder={null}
              placeholder='e.g: 123'
              onChange={(e: { target: { value: SetStateAction<string> } }) => {
                const inputLen = e.target.value.length;
                setCVC(inputLen ? e.target.value : "000");
              }}
            />
          </div>
        </label>
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default PaymentForm;
