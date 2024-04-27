import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="w-[100px] sm:w-[192px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )


export default Clients