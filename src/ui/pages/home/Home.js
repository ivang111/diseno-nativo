import { makeStyles } from "@mui/styles";
import ContactForm from "../../modules/contact-form";
import backgroundImage from "../../assets/white-painted-wall-texture-background.jpg";

const useStyles = makeStyles(() => {
  return {
    root: {
      width: "100%",
      scrollSnapType: "y mandatory",
      overflowY: "scroll",
      height: "91.5vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };
});

function Home() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ContactForm />
    </div>
  );
}

export default Home;
