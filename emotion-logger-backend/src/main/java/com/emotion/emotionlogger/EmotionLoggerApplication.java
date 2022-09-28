package com.emotion.emotionlogger;

import com.emotion.emotionlogger.entity.EmotionEntity;
import com.emotion.emotionlogger.repository.EmotionRepository;
import com.emotion.emotionlogger.repository.EmotionLogRepository;
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

    public static void main(String[] args) {
        SpringApplication.run(EmotionLoggerApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        emotionRepository.save(new EmotionEntity("5", "Anger"));
    }
}
