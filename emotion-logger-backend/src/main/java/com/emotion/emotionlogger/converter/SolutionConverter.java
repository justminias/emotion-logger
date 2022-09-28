package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.SolutionDto;
import com.emotion.emotionlogger.entity.SolutionEntity;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
public class SolutionConverter implements Converter<SolutionDto, SolutionEntity> {

    @Override
    public SolutionEntity convert(SolutionDto solutionDto) {
        return SolutionEntity.builder()
                .id(solutionDto.getId() == null ? UUID.randomUUID().toString() : solutionDto.getId())
                .name(solutionDto.getName())
                .build();
    }
}
