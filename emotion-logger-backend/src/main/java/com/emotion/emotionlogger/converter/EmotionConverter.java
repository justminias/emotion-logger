package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.EmotionDto;
import com.emotion.emotionlogger.entity.EmotionEntity;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
public class EmotionConverter implements Converter<EmotionDto, EmotionEntity> {

    @Override
    public EmotionEntity convert(EmotionDto emotionDto) {
        return EmotionEntity.builder()
                .id(emotionDto.getId() == null ? UUID.randomUUID().toString() : emotionDto.getId())
                .name(emotionDto.getName())
                .build();
    }

    public EmotionDto convertReverse(EmotionEntity emotionEntity) {
        return EmotionDto.builder()
                .id(emotionEntity.getId())
                .name(emotionEntity.getName())
                .build();
    }
}
