import { StyleSheet } from "react-native";
import Colors from "../../features/Config/Colors";

const AppContentStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },

  topBar: {
    backgroundColor: "#333",
    height: 50.0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topBarIcon: {
    backgroundColor: "#bbb",
    height: 42.0,
    marginHorizontal: 10.0,
    width: 42.0,
  },

  topBarTitle: {
    color: Colors.primaryTextColor,
    flex: 1,
    fontSize: 16.0,
    fontWeight: "700",
    textAlign: "center",
  },

  pageWidget: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: Colors.primaryTextColor,
  },

  bottomBar: {
    backgroundColor: "#333",
    height: 60.0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  bottomBarIcon: {
    backgroundColor: "#bbb",
    height: 42.0,
    width: 42.0,
  },

  preloaderGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    rowGap: 20,
  },

  preloaderCard: {
    width: "48%",
  },

  preloaderSquare: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
  },

  preloaderName: {
    marginTop: 10,
    height: 12,
    width: "70%",
    borderRadius: 6,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});

export default AppContentStyle;