import { makeStyles } from "@mui/styles";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "../../../components/atoms/button";
import Typography from "../../../components/atoms/typography/";
import logo from "../../assets/pngegg.png";
import { useCallback, useMemo, useState } from "react";
import { routes } from "../../helpers";
import { useTranslation } from "react-i18next";
import Icon from "../../../components/icon";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "auto",
      height: theme.spacing(4),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center !important",
      padding: theme.spacing(2, 4, 2, 3),
      backgroundColor: theme.palette.secondary.main,
      boxShadow: theme.shadows[2],
    },
    logo: {
      margin: theme.spacing(0, 2),
    },
    iconImge: {
      width: "40px",
      height: "30px",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center !important",
    },
    navMenu: {},
    navItem: {
      color: theme.palette.background.paper,
    },
    boxTogle: {
      textAlign: "center",
    },
    listItemButtom: {
      textAlign: "center", 
    },
  };
});

function NavBar() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("navBar");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    t("home"),
    t("catalogue"),
    t("about-us"),
    t("ourProjects"),
    t("discounts"),
    t("howDoWeDoIt"),
  ];

  const linksItens = useMemo(() => {
    return (
      <Box onClick={handleDrawerToggle} className={styles.boxTogle}>
       <NavLink to="/">
          <img alt="logo" className={styles.logo} height={45} id="logo" src={logo} />
        </NavLink>
        {lenguage}
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemButton className={styles.listItemButtom}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }, [i18n]);

  const handleOnClickHome = useCallback(() => {
    navigate(routes.home.path, { replace: true });
  });
  const handleOnClickCatalogue = useCallback(() => {
    navigate(routes.catalogue.path, { replace: true });
  });
  const handleOnClickAboutus = useCallback(() => {
    navigate(routes.aboutus.path, { replace: true });
  });
  const handleOnClickOurProjects = useCallback(() => {
    navigate(routes.ourProjects.path, { replace: true });
  });
  const handleOnClickDiscounts = useCallback(() => {
    navigate(routes.discounts.path, { replace: true });
  });
  const handleOnClickHowDoWeDoIt = useCallback(() => {
    navigate(routes.howDoWeDoIt.path, { replace: true });
  });

  const lenguage = useMemo(() => {
    if (i18n.language === "es") {
      // eslint-disable-next-line react/jsx-no-bind
      return (
        <Button
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => i18n.changeLanguage("en")}
          startIcon={<Icon.LengEn className={styles.iconImge} />}
          text={t("En")}
        />
      );
    }
    if (i18n.language === "en") {
      // eslint-disable-next-line react/jsx-no-bind
      return (
        <Button
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => i18n.changeLanguage("es")}
          startIcon={<Icon.LengEs className={styles.iconImge} />}
          text={t("Es")}
        />
      );
    }
  }, [i18n.language]);

  return (
    <nav className={styles.root}>
      <div className={styles.iconContainer}>
        <NavLink to="/">
          <img alt="logo" className={styles.logo} height={45} id="logo" src={logo} />
        </NavLink>
        {lenguage}
      </div>
      <div className={styles.linkContainer}>
        <ul className={styles.navMenu}>
          <Button
            onClick={handleOnClickHome}
            text={
              <Typography
                className={styles.navItem}
                fontWeight="fontWeightBold"
                text={t("home")}
                variant="h5"
              />
            }
            variant="text"
          />
          <Button
            className={styles.navItem}
            onClick={handleOnClickCatalogue}
            text={
              <Typography
                className={styles.navItem}
                fontWeight="fontWeightBold"
                text={t("catalogue")}
                variant="h5"
              />
            }
            variant="text"
          />
          <Button
            className={styles.navItem}
            onClick={handleOnClickAboutus}
            text={
              <Typography
                className={styles.navItem}
                fontWeight="fontWeightBold"
                text={t("about-us")}
                variant="h5"
              />
            }
            variant="text"
          />
          <Button
            className={styles.navItem}
            onClick={handleOnClickOurProjects}
            text={
              <Typography
                className={styles.navItem}
                fontWeight="fontWeightBold"
                text={t("ourProjects")}
                variant="h5"
              />
            }
            variant="text"
          />
          <Button
            className={styles.navItem}
            onClick={handleOnClickDiscounts}
            text={
              <Typography
                className={styles.navItem}
                fontWeight="fontWeightBold"
                text={t("discounts")}
                variant="h5"
              />
            }
            variant="text"
          />
          <Button
            className={styles.navItem}
            onClick={handleOnClickHowDoWeDoIt}
            text={
              <Typography
                className={styles.navItem}
                fontWeight="fontWeightBold"
                text={t("howDoWeDoIt")}
                variant="h5"
              />
            }
            variant="text"
          />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
