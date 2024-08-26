import cardBackground from "../../images/bg-card-back.png";
import "./styles.css";

const CardBack = ({ cvc }: { cvc: string }) => {
  return (
    <aside
      style={{
        background: `url(${cardBackground.src}) top left / cover no-repeat`,
      }}
      className='back-card-styles'
    >
      <p>{cvc}</p>
    </aside>
  );
};

export default CardBack;
