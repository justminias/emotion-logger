package com.emotion.emotionlogger;

import com.emotion.emotionlogger.entity.*;
import com.emotion.emotionlogger.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@SpringBootApplication
public class EmotionLoggerApplication implements CommandLineRunner {

    EmotionRepository emotionRepository;
    EmotionLogRepository emotionLogRepository;
    SolutionRepository solutionRepository;
    ReasonRepository reasonRepository;
    UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(EmotionLoggerApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        EmotionEntity emotion = new EmotionEntity("5", "Anger");
        SolutionEntity solution1 = new SolutionEntity("1234", "Listening to music");
        SolutionEntity solution2 = new SolutionEntity("3456", "Jogging");
        ReasonEntity reason = new ReasonEntity("234345", "reason", null);
        UserEntity user = new UserEntity("1", "Name", "Surname", 15);
        userRepository.save(user);
        reasonRepository.save(reason);
        emotionRepository.save(emotion);
        solutionRepository.save(solution1);
        solutionRepository.save(solution2);
        emotionLogRepository.save(EmotionLogEntity.builder()
                .id(UUID.randomUUID().toString())
                .date(LocalDate.now())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now().plusHours(2))
                .description("desc")
                .user(user)
                .reason(reason)
                .emotion(emotion)
                .solutions(List.of(solution1, solution2))
                .build());
    }
}