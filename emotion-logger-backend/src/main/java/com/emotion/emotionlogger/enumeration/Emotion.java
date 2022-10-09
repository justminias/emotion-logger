package com.emotion.emotionlogger.enumeration;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Getter
public enum Emotion {
    FEAR("Fear"),
    SADNESS("Sadness"),
    PAIN("Pain");

    private final String value;

    public static List<String> getAll() {
        return Arrays.stream(Emotion.values())
                .map(Emotion::getValue)
                .collect(Collectors.toList());
    }
}
