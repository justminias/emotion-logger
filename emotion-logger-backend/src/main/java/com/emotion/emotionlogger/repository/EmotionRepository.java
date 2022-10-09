package com.emotion.emotionlogger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmotionRepository extends JpaRepository<EmotionEntity, String> {
}
