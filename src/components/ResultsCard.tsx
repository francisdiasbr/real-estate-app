import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ResultsCardProps {
  summary: string;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ summary }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!summary) return null;

  const paragraphs = summary.split('\n\n');
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1).join('\n\n');

  return (
    <View style={styles.card}>
      <Text style={styles.summaryText}>
        {firstParagraph}
      </Text>
      
      {paragraphs.length > 1 && (
        <>
          <TouchableOpacity 
            onPress={() => setIsExpanded(!isExpanded)}
            style={styles.expandButton}
          >
            <Text style={styles.expandButtonText}>
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </Text>
            <Ionicons 
              name={isExpanded ? "chevron-up" : "chevron-down"} 
              size={24} 
              color="#666"
            />
          </TouchableOpacity>

          {isExpanded && remainingParagraphs && (
            <Text style={[styles.summaryText, styles.expandedText]}>
              {remainingParagraphs}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'center',
  },
  expandedText: {
    marginTop: 10,
  },
  expandButton: {
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 5,
  },
  expandButtonText: {
    color: '#666',
    marginRight: 5,
    fontSize: 14,
  },
});

export default ResultsCard; 