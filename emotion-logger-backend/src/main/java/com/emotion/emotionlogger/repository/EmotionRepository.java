package com.emotion.emotionlogger.repository;

import com.emotion.emotionlogger.entity.EmotionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmotionRepository extends JpaRepository<EmotionEntity, String> {
}
