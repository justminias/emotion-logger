package com.emotion.emotionlogger.converter;

import com.emotion.emotionlogger.dto.UserDto;
import com.emotion.emotionlogger.entity.UserEntity;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
public class UserConverter implements Converter<UserDto, UserEntity> {

    @Override
    public UserEntity convert(UserDto userDto) {
        return UserEntity.builder()
                .id(userDto.getId() == null ? UUID.randomUUID().toString() : userDto.getId())
                .firstName(userDto.getFirstName())
                .lastName(userDto.getLastName())
                .age(userDto.getAge())
                .registrationDate(userDto.getRegistrationDate())
                .build();
    }

    @Override
    public UserDto convertReverse(UserEntity userEntity) {
        return UserDto.builder()
                .id(userEntity.getId())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .age(userEntity.getAge())
                .build();
    }
}