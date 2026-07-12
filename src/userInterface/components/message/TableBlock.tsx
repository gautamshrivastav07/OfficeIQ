import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  columns: string[];
  rows: any[][];
}

const TableBlock = ({
  title,
  columns,
  rows,
}: Props) => {

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      {/* Header */}
      <View style={styles.headerRow}>
        {columns.map((column) => (
          <Text
            key={column}
            style={styles.headerText}>
            {column}
          </Text>
        ))}
      </View>

      {/* Rows */}
      {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={styles.row}>
          {row.map((item, index) => (
            <Text
              key={index}
              style={styles.cell}>
              {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    paddingBottom: 24,
    elevation: 2,
    alignSelf: 'stretch',
    overflow: 'visible',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#EEF4FF',
    borderRadius: 8,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#EEE',
    paddingVertical: 12,
    flexWrap: 'wrap',
  },
  headerText: {
    flex: 1,
    fontWeight: '700',
    textAlign: 'center',
    color: '#2563EB',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#444',
    paddingHorizontal: 8,
  },

});

export default TableBlock;