package com.emotion.emotionlogger.service;

import com.emotion.emotionlogger.converter.UserConverter;
import com.emotion.emotionlogger.dto.UserDto;
import com.emotion.emotionlogger.entity.UserEntity;
import com.emotion.emotionlogger.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserConverter userConverter;

    public void createUser(UserDto userDto) {
        UserEntity convertedUser = userConverter.convert(userDto);
        convertedUser.setRegistrationDate(LocalDateTime.now());
        userRepository.save(convertedUser);
    }

    public UserDto readUser(String id) {
        Optional<UserEntity> result = userRepository.findById(id);
        UserEntity user = result.orElseThrow(NullPointerException::new);
        UserDto convertedUser = userConverter.convertReverse(user);
        return convertedUser;
    }

    public void modifyUser(UserDto userDto) {
        UserEntity convertedUser = userConverter.convert(userDto);
        String tempId = convertedUser.getId();
        LocalDateTime tempRegistrationDate = userRepository.findById(tempId).get().getRegistrationDate();
        convertedUser.setRegistrationDate(tempRegistrationDate);
        userRepository.save(convertedUser);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
