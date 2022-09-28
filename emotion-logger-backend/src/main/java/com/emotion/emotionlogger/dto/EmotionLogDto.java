package com.emotion.emotionlogger.dto;

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
    private String emotionId;
    private String reasonId;
    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDate date;
    private String description;
}
