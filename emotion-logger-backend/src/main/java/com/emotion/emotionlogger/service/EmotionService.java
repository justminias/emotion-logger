package com.emotion.emotionlogger.service;

import com.emotion.emotionlogger.converter.EmotionConverter;
import com.emotion.emotionlogger.dto.EmotionDto;
import com.emotion.emotionlogger.entity.EmotionEntity;
import com.emotion.emotionlogger.repository.EmotionRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class EmotionService {

    private final EmotionRepository emotionRepository;
    private final EmotionConverter emotionConverter;

    public void createEmotion(EmotionDto emotionDto) {
        EmotionEntity convertedEmotion = emotionConverter.convert(emotionDto);
        emotionRepository.save(convertedEmotion);
    }

    public List<EmotionDto> getAll() {
        List<EmotionEntity> emotionEntities = emotionRepository.findAll();
        return emotionEntities.stream()
                .map(e -> emotionConverter.convertReverse(e))
                .collect(Collectors.toList());
    }

    public void modifyEmotion(EmotionDto emotionDto) {
        EmotionEntity convertedEmotion = emotionConverter.convert(emotionDto);
        emotionRepository.save(convertedEmotion);
    }

    public void deleteEmotion(String id) {
        emotionRepository.deleteById(id);
    }
}
