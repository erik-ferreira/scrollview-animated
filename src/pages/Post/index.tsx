import { useState, useRef } from "react";
import { View, Text, ScrollView, useWindowDimensions } from "react-native";

import { ProgressBar } from "../../components/ProgressBar";

import { styles } from "./styles";

interface ScrollPercentageProps {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
}

export function Post() {
  const { height: heightDimensions } = useWindowDimensions();

  const scrollRef = useRef<ScrollView>(null);
  const [percentage, setPercentage] = useState(0);

  function scrollPercentage({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: ScrollPercentageProps) {
    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    const visibleContent = Math.ceil(
      (heightDimensions / contentSize.height) * 100
    );

    setPercentage(value < visibleContent ? 0 : value);
  }

  function handleMoveToUp() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>Lorem Ipsum</Text>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            obcaecati reprehenderit et quaerat impedit itaque aut, illum natus
            laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            obcaecati reprehenderit et quaerat impedit itaque aut, illum natus
            laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam obcaecati
            reprehenderit et quaerat impedit itaque aut, illum natus laudantium!
            Ut error cum nobis dicta quibusdam non quidem consectetur excepturi
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam obcaecati reprehenderit et quaerat impedit itaque aut, illum
            natus laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam obcaecati
            reprehenderit et quaerat impedit itaque aut, illum natus laudantium!
            Ut error cum nobis dicta quibusdam non quidem consectetur excepturi
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam obcaecati reprehenderit et quaerat impedit itaque aut, illum
            natus laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam obcaecati
            reprehenderit et quaerat impedit itaque aut, illum natus laudantium!
            Ut error cum nobis dicta quibusdam non quidem consectetur excepturi
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam obcaecati reprehenderit et quaerat impedit itaque aut, illum
            natus laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam obcaecati
            reprehenderit et quaerat impedit itaque aut, illum natus laudantium!
            Ut error cum nobis dicta quibusdam non quidem consectetur excepturi
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam obcaecati reprehenderit et quaerat impedit itaque aut, illum
            natus laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam obcaecati
            reprehenderit et quaerat impedit itaque aut, illum natus laudantium!
            Ut error cum nobis dicta quibusdam non quidem consectetur excepturi
            beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam obcaecati reprehenderit et quaerat impedit itaque aut, illum
            natus laudantium! Ut error cum nobis dicta quibusdam non quidem
            consectetur excepturi beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam obcaecati reprehenderit et quaerat impedit
            itaque aut, illum natus laudantium! Ut error cum nobis dicta
            quibusdam non quidem consectetur excepturi beatae. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aperiam obcaecati
            reprehenderit et quaerat impedit itaque aut, illum natus laudantium!
            Ut error cum nobis dicta quibusdam non quidem consectetur excepturi
            beatae.
          </Text>
        </View>
      </ScrollView>

      <ProgressBar value={percentage} onMoveToUp={handleMoveToUp} />
    </View>
  );
}
