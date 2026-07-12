import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

interface CardItem {
  label: string;
  value: string;
}

interface Props {
  variant?: string;

  title: string;

  items?: CardItem[];

  id?: string;

  category?: string;

  duration?: string;

  progress?: number;

  status?: string;

  link?: string;
}

const CardBlock = (props: Props) => {
  if (props.variant === 'training') {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.title}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>{props.category}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.value}>{props.duration}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Status</Text>

          <Text
            style={[
              styles.status,
              props.status === 'Completed'
                ? styles.completed
                : styles.pending,
            ]}>
            {props.status}
          </Text>
        </View>

        {/* <View style={styles.progressBackground}>
          <View
            style={[
              styles.progress,
              {
                width: `${props.progress}%`,
              },
            ]}
          />
        </View> */}

        <Text style={styles.progressText}>
          {props.progress}% Completed
        </Text>

        {!!props.link && (
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => Linking.openURL(props.link!)}>
            <Text style={styles.linkText}>
              Open Course
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {props.title}
      </Text>

      {props.items?.map((item, index) => {
        const isUrl = typeof item.value === 'string' && /https?:\/\//.test(item.value);
        return (
          <View key={index} style={styles.infoRow}>
            <Text style={styles.label}>{item.label}</Text>

            {isUrl ? (
              <TouchableOpacity onPress={() => Linking.openURL(item.value)} style={styles.valueContainer}>
                <Text style={[styles.value, styles.linkText]} numberOfLines={0}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.valueContainer}>
                <Text style={styles.value} numberOfLines={0}>
                  {item.value}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    elevation: 2,
    alignSelf: 'stretch',
    minWidth: '100%'
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  label: {
    color: '#666',
    fontSize: 15,
    flexBasis: 120,
  },

  valueContainer: {
    flex: 1,
  },

  value: {
    fontWeight: '600',
    color: '#222',
    textAlign: 'right',
    flexWrap: 'wrap',
  },

  linkText: {
    color: '#2563EB',
    textDecorationLine: 'underline',
  },

  status: {
    fontWeight: '700',
  },

  completed: {
    color: '#22C55E',
  },

  pending: {
    color: '#F59E0B',
  },

  progressBackground: {
    height: 8,
    backgroundColor: '#ECECEC',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 12,
  },

  progress: {
    height: 8,
    backgroundColor: '#2563EB',
  },

  progressText: {
    marginTop: 8,
    color: '#666',
  },

  linkButton: {
    marginTop: 16,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },

//   linkText: {
//     color: '#FFF',
//     fontWeight: '600',
//   },
});

export default CardBlock;