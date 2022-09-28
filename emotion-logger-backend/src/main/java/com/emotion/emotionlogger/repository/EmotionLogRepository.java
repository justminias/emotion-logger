package com.emotion.emotionlogger.repository;

import com.emotion.emotionlogger.entity.EmotionLogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmotionLogRepository extends JpaRepository<EmotionLogEntity, String> {

    List<EmotionLogEntity> findAllByUserId(String userId);
}
