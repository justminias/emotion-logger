package com.emotion.emotionlogger.converter;

import org.apache.commons.lang3.NotImplementedException;

public interface Converter<T1, T2> {

    T2 convert(T1 type1);

    default T1 convertReverse(T2 t2) {
        throw new NotImplementedException();
    }
}