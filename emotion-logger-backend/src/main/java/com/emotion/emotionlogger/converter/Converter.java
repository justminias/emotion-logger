package com.emotion.emotionlogger.converter;

public interface Converter<T1, T2> {

    T2 convert(T1 type1);
}
