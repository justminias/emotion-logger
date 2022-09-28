package com.emotion.emotionlogger.beanconfiguration;

import com.emotion.emotionlogger.aspect.RepositoryMethodsAspect;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AspectConfiguration {

    @Bean
    public RepositoryMethodsAspect repositoryMethodsAspect() {
        return new RepositoryMethodsAspect();
    }
}
