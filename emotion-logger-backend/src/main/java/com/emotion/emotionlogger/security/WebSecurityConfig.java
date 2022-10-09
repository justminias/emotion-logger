package com.emotion.emotionlogger.security;

import com.emotion.emotionlogger.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity,
                                                   AuthenticationProvider authenticationProvider) throws Exception {

        return httpSecurity
                .csrf().disable()
                .authorizeHttpRequests(requests -> requests
                        .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .antMatchers(HttpMethod.POST, "/api/auth").permitAll()
                        .antMatchers(HttpMethod.POST, "/api/emotion-log/add").permitAll()
                        .anyRequest().authenticated())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .and()
                .httpBasic()
                .authenticationEntryPoint(authenticationEntryPoint())
                .and()
                .authenticationProvider(authenticationProvider)
                .build();
    }

    @Bean
    public AuthenticationEntryPoint authenticationEntryPoint() {
        return new BasicAuthEntryPoint();
    }

    @Bean
    public AuthUserService authUserService(UserRepository userRepository) {
        return new AuthUserService(userRepository);
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider(AuthUserService authUserService) {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(authUserService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public static BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
