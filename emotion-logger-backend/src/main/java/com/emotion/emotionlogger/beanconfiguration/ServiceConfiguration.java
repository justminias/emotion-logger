package com.emotion.emotionlogger.beanconfiguration;

import com.emotion.emotionlogger.converter.*;
import com.emotion.emotionlogger.repository.*;
import com.emotion.emotionlogger.service.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceConfiguration {

    @Bean
    public EmotionLogService emotionLogService(EmotionLogRepository emotionLogRepository, SolutionRepository solutionRepository,
                                               EmotionLogConverter emotionLogConverter,
                                               EmotionLogEntityToEmotionLogResponseConverter emotionLogEntityToEmotionLogResponseConverter) {
        return new EmotionLogService(emotionLogRepository, solutionRepository, emotionLogConverter, emotionLogEntityToEmotionLogResponseConverter);
    }

    @Bean
    public SolutionService solutionService(SolutionRepository solutionRepository, SolutionConverter solutionConverter) {
        return new SolutionService(solutionRepository, solutionConverter);
    }

    @Bean
    public UserService userService(UserRepository userRepository, UserConverter userConverter) {
        return new UserService(userRepository, userConverter);
    }
}
