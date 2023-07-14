import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { container } from "../../nextjs-material-kit";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left" as const,
  },
  title: {
    fontSize: "4.2rem" as CSSProperties["fontSize"],
    fontWeight: "600" as CSSProperties["fontWeight"],
    display: "inline-block",
    position: "relative" as CSSProperties["position"],
  },
  subtitle: {
    fontSize: "1.313rem" as CSSProperties["fontSize"],
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative" as CSSProperties["position"],
    zIndex: "3" as CSSProperties["zIndex"],
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center" as CSSProperties["textAlign"],
  },
  rprlogo: {
    height: "100px",
    width: "400px",
    margin: "5px",
  },
  yourlablogo: {
    height: "100px",
    width: "200px",
    margin: "5px",
  },
};

export default componentsStyle;
