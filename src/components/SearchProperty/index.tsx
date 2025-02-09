import { MaterialIcons } from '@expo/vector-icons';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { ActivityIndicator } from 'react-native';
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

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

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

useEffect(() => {
  if (isListening) {
    intervalRef.current = setInterval(() => {
      setRecordingDuration((prev) => prev + 1);
    }, 1000);
  } else {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRecordingDuration(0);
  }

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
        intervalRef.current = null; // Limpeza no cleanup
      }
    };
  }, [isListening]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(searchProperties({
        query: searchQuery,
        limit: 10
      }));
    }
  };

  const checkPermissions = async () => {
    try {
      console.log('Verificando permissões de áudio...');
      const { status } = await Audio.requestPermissionsAsync();
      console.log('Status da permissão:', status);
      
      if (status !== 'granted') {
        console.log('Permissão não concedida');
        Alert.alert(
          'Permissão necessária',
          'O app precisa de acesso ao microfone para realizar buscas por voz.'
        );
        return false;
      }
      return true;
    } catch (error) {
      console.error('Erro ao verificar permissões:', error);
      return false;
    }
  };

  const handleVoiceSearch = async () => {
    if (isListening) {
      try {
        console.log('Parando gravação...');
        if (!recording) return;
        
        setIsListening(false);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('URI da gravação:', uri);
        
        if (!uri) return;
        
        const fileInfo = await FileSystem.getInfoAsync(uri);
        console.log('Informações do arquivo:', fileInfo);
        
        setRecordedUri(uri);
        setRecording(null);

        if (uri) {
          console.log('Iniciando transcrição...');
          try {
            const transcription = await transcribeAudio(uri);
            console.log('Transcrição concluída:', transcription);
            setSearchQuery(transcription);
          } catch (transcriptionError) {
            console.error('Erro específico da transcrição:', transcriptionError);
            Alert.alert('Erro', 'Não foi possível transcrever o áudio');
          }
        }
      } catch (err) {
        console.error('Erro ao parar gravação:', err);
      }
    } else {
      try {
        const hasPermission = await checkPermissions();
        if (!hasPermission) return;

        console.log('Configurando modo de áudio...');
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false
        });

        console.log('Iniciando gravação...');
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY,
          (status) => console.log('Status da gravação:', status),
          100
        );
        
        setRecording(recording);
        setIsListening(true);
        console.log('Gravação iniciada com sucesso');
      } catch (err) {
        console.error('Erro ao iniciar gravação:', err);
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