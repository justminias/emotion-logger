package com.emotion.emotionlogger.service;

import com.emotion.emotionlogger.converter.EmotionLogConverter;
import com.emotion.emotionlogger.converter.EmotionLogEntityToEmotionLogResponseConverter;
import com.emotion.emotionlogger.dto.*;
import com.emotion.emotionlogger.entity.EmotionLogEntity;
import com.emotion.emotionlogger.entity.SolutionEntity;
import com.emotion.emotionlogger.repository.EmotionLogRepository;
import com.emotion.emotionlogger.repository.SolutionRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class EmotionLogService {

    private final EmotionLogRepository emotionLogRepository;
    private final SolutionRepository solutionRepository;
    private final EmotionLogConverter emotionLogConverter;
    private final EmotionLogEntityToEmotionLogResponseConverter emotionLogEntityToEmotionLogResponseConverter;

    public void createEmotionLog(EmotionLogDto emotionLogDto) {
        EmotionLogEntity convertedEmotionLog = emotionLogConverter.convert(emotionLogDto);
        emotionLogRepository.save(convertedEmotionLog);
    }

    public EmotionLogDto readEmotionLog(String id) {
        Optional<EmotionLogEntity> result = emotionLogRepository.findById(id);
        EmotionLogEntity emotionLog = result.orElseThrow(NullPointerException::new);
        EmotionLogDto convertedEmotionLog = emotionLogConverter.convertReverse(emotionLog);
        return convertedEmotionLog;
    }

    public void modifyEmotionLog(EmotionLogDto emotionLogDto) {
        EmotionLogEntity convertedEmotionLog = emotionLogConverter.convert(emotionLogDto);
        emotionLogRepository.save(convertedEmotionLog);
    }


    public void deleteEmotionLog(String id) {
        emotionLogRepository.deleteById(id);
    }

    public void joinSolutions(JoinSolutionsToEmotionLogRequest joinSolutionsToEmotionLogRequest) {
        List<String> solutionIds = joinSolutionsToEmotionLogRequest.getSolutionIds();

        List<SolutionEntity> solutions = solutionRepository.findAllById(solutionIds);


        String emotionLogId = joinSolutionsToEmotionLogRequest.getEmotionLogId();
        EmotionLogEntity emotionLogEntity = emotionLogRepository.getReferenceById(emotionLogId);

        emotionLogEntity.setSolutions(solutions);
        emotionLogRepository.save(emotionLogEntity);
    }

    public EmotionLogsResponse getEmotionLogsByUser(EmotionLogsRequest emotionLogsRequest) {
        List<EmotionLogEntity> emotionLogEntities = emotionLogRepository.findAll();
        List<EmotionLogResponse> emotionLogResponses = emotionLogEntities.stream()
                .map(emotionLogEntityToEmotionLogResponseConverter::convert)
                .collect(Collectors.toList());
        return new EmotionLogsResponse(emotionLogResponses);
    }
}