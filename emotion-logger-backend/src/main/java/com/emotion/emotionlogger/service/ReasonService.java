package com.emotion.emotionlogger.service;

import com.emotion.emotionlogger.converter.ReasonConverter;
import com.emotion.emotionlogger.dto.ReasonDto;
import com.emotion.emotionlogger.entity.ReasonEntity;
import com.emotion.emotionlogger.repository.ReasonRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class ReasonService {

    private final ReasonRepository reasonRepository;
    private final ReasonConverter reasonConverter;

    public void createReason(ReasonDto reasonDto) {
        ReasonEntity convertedReason = reasonConverter.convert(reasonDto);
        reasonRepository.save(convertedReason);
    }

    public List<ReasonDto> selectReasons() {
        return reasonRepository.findAll().stream()
                .map(entity -> new ReasonDto(entity.getId(), entity.getName(), entity.getUpdateDate()))
                .collect(Collectors.toList());
    }

    public void modifyReason(ReasonDto reasonDto) {
        ReasonEntity convertedReason = reasonConverter.convert(reasonDto);
        convertedReason.setUpdateDate(LocalDateTime.now());
        reasonRepository.save(convertedReason);
    }

    public void deleteReason(String id) {
        reasonRepository.deleteById(id);
    }
}
