import "./styles.css";
import Confetti from "../Confetti";
const PaymentComplete = ({ cardHolderName }: { cardHolderName: string }) => {
  return (
    <article>
      <svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: "rgb(94, 61, 235)", stopOpacity: 1 }}
            ></stop>
            <stop
              offset='100%'
              style={{ stopColor: "rgb(81,34,114)", stopOpacity: 1 }}
            ></stop>
          </linearGradient>
        </defs>
        <circle cx='50' cy='50' r='50' fill='url(#grad1)'></circle>
        <path
          d='M35 50 l10 10 l20 -20'
          stroke='white'
          strokeWidth='5'
          fill='none'
        ></path>
      </svg>
      <div>
        <p>Thank you {cardHolderName}!</p>
        <p>We've added your card details.</p>
      </div>
      {/* <Confetti /> */}
    </article>
  );
};

export default PaymentComplete;
