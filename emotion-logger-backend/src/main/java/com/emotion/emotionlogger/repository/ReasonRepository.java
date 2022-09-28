package com.emotion.emotionlogger.repository;

import com.emotion.emotionlogger.entity.ReasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReasonRepository extends JpaRepository<ReasonEntity, String> {
}
