package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.EmotionLogDto;
import com.emotion.emotionlogger.entity.EmotionLogEntity;
import com.emotion.emotionlogger.entity.SolutionEntity;
import com.emotion.emotionlogger.enumeration.Emotion;
import com.emotion.emotionlogger.repository.SolutionRepository;
import com.emotion.emotionlogger.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.Collections;
import java.util.HashSet;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class EmotionLogConverter implements Converter<EmotionLogDto, EmotionLogEntity> {

    private final UserRepository userRepository;
    private final SolutionRepository solutionRepository;

    @Override
    public EmotionLogEntity convert(EmotionLogDto emotionLogDto) {

        return EmotionLogEntity.builder()
                .id(emotionLogDto.getId() == null ? UUID.randomUUID().toString() : emotionLogDto.getId())
                .user(emotionLogDto.getUserId() == null ? null : userRepository.getReferenceById(emotionLogDto.getUserId()))
                .emotion(Emotion.valueOf(emotionLogDto.getEmotion()))
                .reason(emotionLogDto.getReason() == null ? null : emotionLogDto.getReason())
                .startTime(emotionLogDto.getStartTime())
                .endTime(emotionLogDto.getEndTime())
                .date(emotionLogDto.getDate())
                .description(emotionLogDto.getDescription())
                .solutions(emotionLogDto.getChosenSolutionIds().isEmpty()
                        ? Collections.emptyList()
                        : solutionRepository.findAllById(emotionLogDto.getChosenSolutionIds()))
                .build();
    }

    @Override
    public EmotionLogDto convertReverse(EmotionLogEntity emotionLogEntity) {
        return EmotionLogDto.builder()
                .id(emotionLogEntity.getId())
                .userId(emotionLogEntity.getUser().getId())
                .emotion(emotionLogEntity.getEmotion().name())
                .reason(emotionLogEntity.getReason())
                .startTime(emotionLogEntity.getStartTime())
                .endTime(emotionLogEntity.getEndTime())
                .date(emotionLogEntity.getDate())
                .description(emotionLogEntity.getDescription())
                .chosenSolutionIds(emotionLogEntity.getSolutions().stream()
                        .map(SolutionEntity::getId)
                        .collect(Collectors.toSet()) )
                .build();
    }
}