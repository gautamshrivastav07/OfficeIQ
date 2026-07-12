import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  items: string[];
}

const ListBlock = ({
  title,
  items,
}: Props) => {
  const renderItem = (
    item: string,
    index: number,
  ) => {
    const parts = item.split(':');

    const label = parts[0]?.trim();

    const value = parts
      .slice(1)
      .join(':')
      .trim();

    return (
      <View
        key={index}
        style={[
          styles.row,
          index === items.length - 1 &&
            styles.lastRow,
        ]}>
        <Text style={styles.label}>
          {label}
        </Text>

        <Text style={styles.value}>
          ₹{value}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        💰 {title}
      </Text>

      {items.map(renderItem)}
    </View>
  );
};

export default ListBlock;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 18,
    marginVertical: 10,
    elevation: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ECECEC',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  label: {
    flex: 1,
    color: '#666',
    fontSize: 15,
  },

  value: {
    fontWeight: '700',
    color: '#111',
    fontSize: 15,
  },
});