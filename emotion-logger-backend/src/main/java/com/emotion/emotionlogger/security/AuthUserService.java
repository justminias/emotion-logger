package com.emotion.emotionlogger.security;

import com.emotion.emotionlogger.entity.UserEntity;
import com.emotion.emotionlogger.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

@RequiredArgsConstructor
public class AuthUserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not exists."));


        return UserDetailsImpl.builder()
                .id(user.getId())
                .username(user.getEmail())
                .password(user.getPassword())
                .accountNonLocked(true)
                .accountNonExpired(true)
                .credentialsNonExpired(true)
                .enabled(true)
                .authorities(List.of(new SimpleGrantedAuthority("USER")))
                .build();
    }
}
