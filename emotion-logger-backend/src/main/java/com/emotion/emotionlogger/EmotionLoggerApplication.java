package com.emotion.emotionlogger;

import com.emotion.emotionlogger.entity.EmotionEntity;
import com.emotion.emotionlogger.entity.SolutionEntity;
import com.emotion.emotionlogger.repository.EmotionRepository;
import com.emotion.emotionlogger.repository.EmotionLogRepository;
import com.emotion.emotionlogger.repository.SolutionRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

@AllArgsConstructor
@SpringBootApplication
public class EmotionLoggerApplication implements CommandLineRunner {

    EmotionRepository emotionRepository;

    EmotionLogRepository entryRepository;

    SolutionRepository solutionRepository;

    public static void main(String[] args) {
        SpringApplication.run(EmotionLoggerApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        emotionRepository.save(new EmotionEntity("5", "Anger"));
        solutionRepository.save(new SolutionEntity("1234", "Listening to music"));
        solutionRepository.save(new SolutionEntity("3456", "Jogging"));
    }
}