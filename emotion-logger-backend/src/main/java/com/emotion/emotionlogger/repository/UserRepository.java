package com.emotion.emotionlogger.repository;

import com.emotion.emotionlogger.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
}
