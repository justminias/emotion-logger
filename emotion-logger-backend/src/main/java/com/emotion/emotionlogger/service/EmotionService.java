package com.emotion.emotionlogger.service;

import com.emotion.emotionlogger.converter.EmotionConverter;
import com.emotion.emotionlogger.dto.EmotionDto;
import com.emotion.emotionlogger.entity.EmotionEntity;
import com.emotion.emotionlogger.repository.EmotionRepository;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RequiredArgsConstructor
public class EmotionService {

    private final EmotionRepository emotionRepository;
    private final EmotionConverter emotionConverter;

    public void createEmotion(EmotionDto emotionDto) {
        EmotionEntity convertedEmotion = emotionConverter.convert(emotionDto);
        emotionRepository.save(convertedEmotion);
    }

    public EmotionDto readEmotion(String id) {
        Optional<EmotionEntity> result = emotionRepository.findById(id);
        EmotionEntity emotion = result.orElseThrow(NullPointerException::new);
        EmotionDto convertedEmotion = emotionConverter.convertReverse(emotion);
        return convertedEmotion;
    }

    public void modifyEmotion(EmotionDto emotionDto) {
        EmotionEntity convertedEmotion = emotionConverter.convert(emotionDto);
        emotionRepository.save(convertedEmotion);
    }

    public void deleteEmotion(String id) {
        emotionRepository.deleteById(id);
    }
}
