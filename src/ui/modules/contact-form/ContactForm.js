import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "80vh",
      scrollSnapAlign: "start",
      // padding: theme.spacing(9, 2, 0, 2),
    },
    cardRigth: {
      width: "400px",
      height: "800px",
      backgroundColor: "red",
    },
    cardLeft: {
      width: "400px",
      height: "800px",
      backgroundColor: "blue",
    },
  };
});

function ContactForm() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <dvi className={styles.cardRigth}>1</dvi>
      <dvi className={styles.cardLeft}>2</dvi>
    </div>
  );
}

export default ContactForm;
