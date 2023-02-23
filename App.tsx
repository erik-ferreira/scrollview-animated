import { StatusBar } from "react-native";

import { Post } from "./src/pages/Post";

export default function App() {
  return (
    <>
      <Post />
      <StatusBar barStyle="light-content" />
    </>
  );
}
