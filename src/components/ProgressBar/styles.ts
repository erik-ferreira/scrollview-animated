import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#29292E",
    alignSelf: "center",
    position: "absolute",
    bottom: 32,
    borderRadius: 32,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  value: {
    color: "#C4C4CC",
    marginRight: 8,
  },

  tracker: {
    flex: 1,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#505059",
  },

  progress: {
    height: 4,
    borderRadius: 4,
    backgroundColor: "#8257E5",
  },
});
