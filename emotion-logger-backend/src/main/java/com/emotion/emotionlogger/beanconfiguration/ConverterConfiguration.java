package com.emotion.emotionlogger.beanconfiguration;

import com.emotion.emotionlogger.converter.*;
import com.emotion.emotionlogger.repository.EmotionRepository;
import com.emotion.emotionlogger.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConverterConfiguration {

    @Bean
    public EmotionLogConverter emotionLogConverter(UserRepository userRepository, EmotionRepository emotionRepository) {
        return new EmotionLogConverter(userRepository, emotionRepository);
    }

    @Bean
    public EmotionConverter emotionConverter() {
        return new EmotionConverter();
    }

    @Bean
    public SolutionConverter solutionConverter() {
        return new SolutionConverter();
    }

    @Bean
    public UserConverter userConverter() {
        return new UserConverter();
    }

    @Bean
    public EmotionLogEntityToEmotionLogResponseConverter emotionLogEntityToEmotionLogResponseConverter() {
        return new EmotionLogEntityToEmotionLogResponseConverter();
    }
}
