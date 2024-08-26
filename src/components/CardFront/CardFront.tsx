import "./styles.css";
import cardBackground from "../../images/bg-card-front.png";

const CardFront = ({
  cardHolderName,
  cardNumber,
  expirationDate,
}: {
  cardHolderName: string;
  cardNumber: string;
  expirationDate: { month: string; year: string };
}) => {
  return (
    <aside
      style={{
        background: `url(${cardBackground.src}) top left / cover no-repeat`,
      }}
      className='front-card-styles'
    >
      <div className='circles'>
        <svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='20' cy='20' r='20' fill='white'></circle>
        </svg>
        <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='10'
            cy='10'
            r='9.5'
            fill='transparent'
            stroke='white'
            strokeWidth='1'
          ></circle>
        </svg>
      </div>

      <div className='card-info'>
        <h1 className='number'>{cardNumber}</h1>
        <div className='name-and-date'>
          <p>{cardHolderName}</p>
          <p>
            {expirationDate.month}/{expirationDate.year}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default CardFront;
