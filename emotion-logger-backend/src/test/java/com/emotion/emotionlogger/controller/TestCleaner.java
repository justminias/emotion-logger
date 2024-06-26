package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class TestCleaner {

    @Autowired
    EmotionLogRepository emotionLogRepository;

    @Autowired
    SolutionRepository solutionRepository;

    @Autowired
    UserRepository userRepository;

    public void cleanAllRepositories() {
        emotionLogRepository.deleteAll();
        solutionRepository.deleteAll();
        userRepository.deleteAll();
    }
}
