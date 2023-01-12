import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {" "}
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10 rounded-[25px]" />
    </div>
    <div className={layout.sectionImg}>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
      <div className="absolute z-[1] w-[30%] h-[40%]  right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default CardDeal;
