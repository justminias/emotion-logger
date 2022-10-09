package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.EmotionLogDto;
import com.emotion.emotionlogger.entity.EmotionLogEntity;
import com.emotion.emotionlogger.repository.EmotionRepository;
import com.emotion.emotionlogger.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@RequiredArgsConstructor
public class EmotionLogConverter implements Converter<EmotionLogDto, EmotionLogEntity> {

    private final UserRepository userRepository;
    private final EmotionRepository emotionRepository;

    @Override
    public EmotionLogEntity convert(EmotionLogDto emotionLogDto) {

        return EmotionLogEntity.builder()
                .id(emotionLogDto.getId() == null ? UUID.randomUUID().toString() : emotionLogDto.getId())
                .user(emotionLogDto.getUserId() == null ? null : userRepository.getReferenceById(emotionLogDto.getUserId()))
                .emotion(emotionLogDto.getEmotionId() == null ? null : emotionRepository.getReferenceById(emotionLogDto.getEmotionId()))
                .reason(emotionLogDto.getReason() == null ? null : emotionLogDto.getReason())
                .startTime(emotionLogDto.getStartTime())
                .endTime(emotionLogDto.getEndTime())
                .date(emotionLogDto.getDate())
                .description(emotionLogDto.getDescription())
                .build();
    }

    @Override
    public EmotionLogDto convertReverse(EmotionLogEntity emotionLogEntity) {
        return EmotionLogDto.builder()
                .id(emotionLogEntity.getId())
                .userId(emotionLogEntity.getUser().getId())
                .emotionId(emotionLogEntity.getEmotion().getId())
                .reason(emotionLogEntity.getReason())
                .startTime(emotionLogEntity.getStartTime())
                .endTime(emotionLogEntity.getEndTime())
                .date(emotionLogEntity.getDate())
                .description(emotionLogEntity.getDescription())
                .build();
    }
}