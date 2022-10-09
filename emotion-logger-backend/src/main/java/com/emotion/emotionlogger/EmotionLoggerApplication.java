package com.emotion.emotionlogger;

import com.emotion.emotionlogger.entity.*;
import com.emotion.emotionlogger.repository.*;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    UserRepository userRepository;
    BCryptPasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(EmotionLoggerApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        EmotionEntity emotion = new EmotionEntity("5", "Anger");
        EmotionEntity emotion2 = new EmotionEntity("6", "Hate");
        EmotionEntity emotion3 = new EmotionEntity("7", "Fear");
        SolutionEntity solution1 = new SolutionEntity("1234", "Listening to music");
        SolutionEntity solution2 = new SolutionEntity("3456", "Jogging");
        UserEntity user = UserEntity.builder()
                .id("1")
                .firstName("Name")
                .lastName("Surname")
                .age(20)
                .email("mail@ex.com")
                .password(passwordEncoder.encode("pass"))
                .build();
        UserEntity user2 = UserEntity.builder()
                .id("2")
                .firstName("Kamil")
                .lastName("Kazmierczak")
                .age(26)
                .email("admin")
                .password(passwordEncoder.encode("admin"))
                .build();
        EmotionLogEntity log1 = EmotionLogEntity.builder()
                .id(UUID.randomUUID().toString())
                .date(LocalDate.now())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now().plusHours(2))
                .description("desc")
                .user(user)
                .emotion(emotion)
                .solutions(List.of(solution1, solution2))
                .build();
        EmotionLogEntity log2 = EmotionLogEntity.builder()
                .id(UUID.randomUUID().toString())
                .date(LocalDate.now())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now().plusHours(2))
                .description("desc")
                .user(user2)
                .emotion(emotion2)
                .solutions(List.of(solution1, solution2))
                .build();
        EmotionLogEntity log3 = EmotionLogEntity.builder()
                .id(UUID.randomUUID().toString())
                .date(LocalDate.now())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now().plusHours(3))
                .description("desc")
                .user(user2)
                .emotion(emotion3)
                .solutions(List.of(solution1, solution2))
                .build();
        userRepository.saveAll(List.of(user, user2));
        emotionRepository.saveAll(List.of(emotion, emotion2, emotion3));
        solutionRepository.save(solution1);
        solutionRepository.save(solution2);
        emotionLogRepository.saveAll(List.of(log1, log2, log3));
    }
}