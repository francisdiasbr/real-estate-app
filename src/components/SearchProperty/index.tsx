import { MaterialIcons } from '@expo/vector-icons';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import { AppDispatch } from '../../app/store';
import { searchProperties } from '../../features/searchProperties/searchPropertiesSlice';
import * as S from './styles';
import { transcribeAudio } from '../../services/transcriptionService';

interface SearchPropertyProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchProperty: React.FC<SearchPropertyProps> = ({ 
  searchQuery, 
  setSearchQuery 
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isListening, setIsListening] = useState(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [recordedUri, setRecordedUri] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isListening) {
      timer = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
    } else {
      setRecordingDuration(0);
    }
    return () => clearInterval(timer);
  }, [isListening]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(searchProperties({
        query: searchQuery,
        limit: 10
      }));
    }
  };

  const handleVoiceSearch = async () => {
    if (isListening) {
      try {
        if (!recording) return;
        setIsListening(false);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setRecordedUri(uri);
        setRecording(null);
        console.log('Gravação finalizada em:', uri);

        const transcription = await transcribeAudio(uri);
        setSearchQuery(transcription);
      } catch (err) {
        console.error('Falha ao parar gravação', err);
      }
    } else {
      try {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
        setIsListening(true);
      } catch (err) {
        console.error('Falha ao iniciar gravação', err);
      }
    }
  };

  const playRecording = async () => {
    try {
      if (!recordedUri) return;
      
      if (sound) {
        await sound.unloadAsync();
      }
      
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: recordedUri }
      );
      setSound(newSound);
      await newSound.playAsync();
    } catch (err) {
      console.error('Erro ao reproduzir:', err);
    }
  };

  return (
    <S.SearchSection>
      <S.MessageContainer>
        <S.StyledInput 
          value={searchQuery}
          onChangeText={setSearchQuery}
          multiline
        />
        <S.ButtonsContainer>
          <S.VoiceButton onPress={handleVoiceSearch}>
            {isListening ? (
              <S.RecordingContainer>
                <MaterialIcons 
                  name="pause" 
                  size={24} 
                  color="#FF385C"
                />
                <S.RecordingTime>
                  {Math.floor(recordingDuration / 60)}:{String(recordingDuration % 60).padStart(2, '0')}
                </S.RecordingTime>
              </S.RecordingContainer>
            ) : (
              <MaterialIcons name="mic" size={24} color="#666" />
            )}
          </S.VoiceButton>
          {recordedUri && !isListening && (
            <S.VoiceButton onPress={playRecording}>
              <MaterialIcons name="play-arrow" size={24} color="#666" />
            </S.VoiceButton>
          )}
          {searchQuery.trim() && (
            <S.SendButton 
              onPress={handleSearch}
              style={{ 
                alignSelf: 'center',
                position: 'relative',
                width: 32,
                height: 32,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MaterialIcons 
                name="send" 
                size={20} 
                color="#FFF" 
                style={{
                  transform: [{ rotate: '-45deg' }, { translateY: -2 }, { translateX: 1 }]
                }}
              />
            </S.SendButton>
          )}
        </S.ButtonsContainer>
      </S.MessageContainer>
    </S.SearchSection>
  );
}; 