import Image from "next/image";
import styles from "./SubBanner.module.css";
import Spline from "@splinetool/react-spline";

export default function SubBanner() {
  return (
    <main className={styles.sub_banner_container}>
    <div className={styles.text_container}>
        <h1>
            Get updates instantly so you can make an informed decision while you are planning your day! We use OpenWeather API so you can be assured the information is correct! And TripAdvisor API to get you the information on the location you want!
        </h1>
    </div>
    <div className={s}>
        <Spline scene="https://prod.spline.design/88MjFR-HlmeS6fqw/scene.splinecode" />
        <h2>Hover over the tree to make the leaves disappear for good!</h2>
    </div>
</main>

  );
}
