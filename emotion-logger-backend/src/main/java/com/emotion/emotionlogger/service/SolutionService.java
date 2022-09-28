package com.emotion.emotionlogger.service;

import com.emotion.emotionlogger.converter.SolutionConverter;
import com.emotion.emotionlogger.dto.SolutionDto;
import com.emotion.emotionlogger.entity.SolutionEntity;
import com.emotion.emotionlogger.repository.SolutionRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class SolutionService {

    private final SolutionRepository solutionRepository;
    private final SolutionConverter solutionConverter;

    public void createSolution(SolutionDto solutionDto) {
        SolutionEntity convertedSolution = solutionConverter.convert(solutionDto);
        solutionRepository.save(convertedSolution);
    }

    public List<String> selectSolutions() {
        return solutionRepository.findAll().stream()
                .map(SolutionEntity::getName)
                .collect(Collectors.toList());
    }

    public void modifySolution(SolutionDto solutionDto) {
        SolutionEntity convertedSolution = solutionConverter.convert(solutionDto);
        convertedSolution.setUpdateDate(LocalDateTime.now());
        solutionRepository.save(convertedSolution);
    }

    public void deleteSolution(String id) {
        solutionRepository.deleteById(id);
    }
}
