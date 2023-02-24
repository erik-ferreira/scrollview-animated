import Animated, {
  BounceIn,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

interface ProgressBarProps {
  value: number;
  onMoveToUp: () => void;
}

export function ProgressBar({ value, onMoveToUp }: ProgressBarProps) {
  const formatValue = value.toFixed(0);
  const widthAnimated = useSharedValue(200);
  const endReached = value >= 95;
  widthAnimated.value = endReached ? 56 : 200;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthAnimated.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <TouchableOpacityAnimated
          entering={BounceIn}
          exiting={FadeOut}
          onPress={onMoveToUp}
        >
          <Feather name="arrow-up" size={24} color="#C4C4CC" />
        </TouchableOpacityAnimated>
      ) : (
        <Animated.View
          style={styles.progressContainer}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text style={styles.value}>{formatValue}%</Text>

          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
