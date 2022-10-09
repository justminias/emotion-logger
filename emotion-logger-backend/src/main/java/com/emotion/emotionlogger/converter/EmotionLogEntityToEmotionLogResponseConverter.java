package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.EmotionLogResponse;
import com.emotion.emotionlogger.entity.EmotionLogEntity;

import java.util.stream.Collectors;

public class EmotionLogEntityToEmotionLogResponseConverter implements Converter<EmotionLogEntity, EmotionLogResponse> {

    @Override
    public EmotionLogResponse convert(EmotionLogEntity emotionLogEntity) {
        return EmotionLogResponse.builder()
                .id(emotionLogEntity.getId())
                .emotionName(emotionLogEntity.getEmotion().getName())
                .startTime(emotionLogEntity.getStartTime())
                .endTime(emotionLogEntity.getEndTime())
                .date(emotionLogEntity.getDate())
                .description(emotionLogEntity.getDescription())
                .reason(emotionLogEntity.getReason())
                .solutions(emotionLogEntity.getSolutions().stream()
                        .map(solutionEntity -> solutionEntity.getName())
                        .collect(Collectors.toList()))
                .build();
    }
}
