package com.emotion.emotionlogger.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

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

    @Builder.Default
    private Set<String> chosenSolutionIds = new HashSet<>();
}