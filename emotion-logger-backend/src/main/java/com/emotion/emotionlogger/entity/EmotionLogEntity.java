package com.emotion.emotionlogger.entity;

import com.emotion.emotionlogger.enumeration.Emotion;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"user", "solutions"})
@Table(name = "EMOTION_LOGS")
@Entity
@Builder
public class EmotionLogEntity {

    @Id
    public String id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private UserEntity user;

    @Enumerated(EnumType.STRING)
    private Emotion emotion;

    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDate date;
    private String description;
    private String reason;

    @ManyToMany
    @JoinTable(name = "emotion_log_solution", joinColumns = @JoinColumn(name = "solution_id"), inverseJoinColumns = @JoinColumn(name = "emotion_log_id"))
    @JsonManagedReference
    private List<SolutionEntity> solutions;
}
