import { View, Text } from "react-native";

import { styles } from "./styles";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  const formatValue = value.toFixed(0);

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{formatValue}%</Text>

      <View style={styles.tracker}>
        <View style={[styles.progress, { width: `${value}%` }]} />
      </View>
    </View>
  );
}
