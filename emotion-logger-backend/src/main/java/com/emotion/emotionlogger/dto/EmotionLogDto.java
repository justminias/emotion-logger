package com.emotion.emotionlogger.dto;

import com.emotion.emotionlogger.enumeration.Emotion;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class EmotionLogDto implements Dto {

    private String id;
    private String userId;
    private String emotion;
    private String reason;
    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDate date;
    private String description;
}