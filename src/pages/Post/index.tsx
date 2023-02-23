import { useState } from "react";
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

  return (
    <View style={styles.container}>
      <ScrollView
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

      <ProgressBar value={percentage} />
    </View>
  );
}

/**
 * Content offset - onde o usuário fica ao terminar a rolagem | 0.761 - 5.714 (esse valor muda)
 * Content size - tamanho do conteúdo da scrollview | 5274.666
 * Layout measurement - layout visível na tela | 659.428588
 * height dimensions - altura da tela | 683.4285714
 *
 * (659 + 5) / 5274 = 0,125900 -> * 100 = 12.5900
 */
