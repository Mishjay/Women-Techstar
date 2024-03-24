import FeaturesData from "./data";
import styles from'./style.module.css'
export const Features = () => {
    return (
        <section className = {styles.features}>
            <h3 className={styles.title}>The Power of Premium</h3> 
          
            <div className={styles.list}>
                {FeaturesData.map((feature, index) => (
                   
                   <div className={styles.item}>
                        <img src={feature.image} alt={feature.title} /> 
                        <h5 className= {styles.title}>{feature.title}</h5>
                        <p  className={styles.description}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};