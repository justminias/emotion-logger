package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.ReasonDto;
import com.emotion.emotionlogger.entity.ReasonEntity;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
public class ReasonConverter implements Converter<ReasonDto, ReasonEntity> {

    @Override
    public ReasonEntity convert(ReasonDto reasonDto) {
        return ReasonEntity.builder()
                .id(reasonDto.getId() == null ? UUID.randomUUID().toString() : reasonDto.getId())
                .name(reasonDto.getName())
                .build();
    }
}
