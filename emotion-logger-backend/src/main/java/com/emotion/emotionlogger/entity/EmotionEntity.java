package com.emotion.emotionlogger.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "EMOTIONS")
@Builder
public class EmotionEntity {

    @Id
    private String id;

    @Column(unique = true)
    private String name;
}
