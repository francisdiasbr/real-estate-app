import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as S from './styles';

const SummaryCard = ({ summary }: { summary: string }) => {
  const [expanded, setExpanded] = useState(false);
  
  const formatSummary = (text: string) => {
    return text.split('.')
      .filter(sentence => sentence.trim().length > 0)
      .map(sentence => sentence.trim() + '. ');
  };

  const sentences = formatSummary(summary);
  const displaySentences = expanded ? sentences : sentences.slice(0, 3);
  
  return (
    <S.SummaryCard>
      <S.SummaryText>
        {displaySentences.map((sentence, index) => (
          <Text 
            key={index} 
            style={{ 
              marginBottom: 6,
              lineHeight: 22,
              paddingHorizontal: 16,
              fontSize: index === 0 ? 16 : 14,
              fontWeight: index === 0 ? '600' : '400',
              color: index === 0 ? '#333' : '#666',
              letterSpacing: index === 0 ? 0.3 : 0,
              textAlign: 'center'
            }}
          >
            {sentence}
          </Text>
        ))}
      </S.SummaryText>
      {sentences.length > 3 && (
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <S.ExpandButton>
            <Text style={{ 
              color: '#FF385C',
              fontWeight: '600',
              marginTop: 8
            }}>
              {expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </S.ExpandButton>
        </TouchableOpacity>
      )}
    </S.SummaryCard>
  );
};

export default SummaryCard;