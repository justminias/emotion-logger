package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.dto.EmotionLogDto;
import com.emotion.emotionlogger.dto.UserDto;
import com.emotion.emotionlogger.enumeration.Emotion;
import com.emotion.emotionlogger.service.EmotionLogService;
import com.emotion.emotionlogger.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Month;

@Component
public class EmotionLogControllerTestInitializer {

    @Autowired
    EmotionLogService emotionLogService;

    @Autowired
    UserService userService;

    public void shouldAddEmotionLogToDatabaseInitializeData() {

        UserDto userDto = UserDto.builder()
                .id("1")
                .firstName("Fname1")
                .lastName("Lname1")
                .age(20)
                .build();
        userService.createUser(userDto);
    }

    public void shouldUpdateEmotionLogToDatabaseInitializeData() {
        UserDto userDto = UserDto.builder()
                .id("3")
                .firstName("Fname3")
                .lastName("Lname3")
                .age(20)
                .build();
        userService.createUser(userDto);

        EmotionLogDto emotionLogDto = EmotionLogDto.builder()
                .id("3")
                .userId("3")
                .emotion(Emotion.FEAR)
                .reason("Reason3")
                .startTime(LocalTime.of(12, 30, 12))
                .endTime(LocalTime.of(13, 12, 12))
                .date(LocalDate.of(2020, Month.SEPTEMBER, 12))
                .description("Description3")
                .build();
        emotionLogService.createEmotionLog(emotionLogDto);
    }

    public void shouldDeleteEmotionLogFromDatabaseInitializeData() {
        UserDto userDto = UserDto.builder()
                .id("4")
                .firstName("Fname4")
                .lastName("Lname4")
                .age(20)
                .build();
        userService.createUser(userDto);

        EmotionLogDto emotionLogDto = EmotionLogDto.builder()
                .id("4")
                .userId("4")
                .emotion(Emotion.PAIN)
                .reason("Reason4")
                .startTime(LocalTime.of(12, 30, 12))
                .endTime(LocalTime.of(13, 12, 12))
                .date(LocalDate.of(2020, Month.SEPTEMBER, 12))
                .description("Description4")
                .build();
        emotionLogService.createEmotionLog(emotionLogDto);
    }

    public void shouldReturnEmotionLogsForUserInitializeData() {

        UserDto userDto = UserDto.builder()
                .id("5")
                .firstName("Fname5")
                .lastName("Lname5")
                .age(20)
                .build();
        userService.createUser(userDto);

        EmotionLogDto emotionLogDto1 = EmotionLogDto.builder()
                .id("5")
                .userId("5")
                .emotion(Emotion.PAIN)
                .reason("Reason5")
                .startTime(LocalTime.of(12, 30, 12))
                .endTime(LocalTime.of(13, 12, 12))
                .date(LocalDate.of(2020, Month.SEPTEMBER, 12))
                .description("Description5")
                .build();
        emotionLogService.createEmotionLog(emotionLogDto1);

        EmotionLogDto emotionLogDto2 = EmotionLogDto.builder()
                .id("6")
                .userId("5")
                .emotion(Emotion.SADNESS)
                .reason("Reason6")
                .startTime(LocalTime.of(13, 13, 13))
                .endTime(LocalTime.of(14, 13, 13))
                .date(LocalDate.of(2021, Month.OCTOBER, 13))
                .description("Description6")
                .build();
        emotionLogService.createEmotionLog(emotionLogDto2);
    }
}
