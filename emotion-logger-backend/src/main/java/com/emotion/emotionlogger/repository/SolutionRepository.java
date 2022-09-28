package com.emotion.emotionlogger.repository;

import com.emotion.emotionlogger.entity.SolutionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolutionRepository extends JpaRepository<SolutionEntity, String> {
}
