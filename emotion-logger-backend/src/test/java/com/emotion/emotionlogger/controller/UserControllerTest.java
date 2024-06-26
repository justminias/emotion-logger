package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.EmotionLoggerIntegrationTest;
import com.emotion.emotionlogger.dto.UserDto;
import com.emotion.emotionlogger.service.UserService;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.hamcrest.Matchers.equalTo;

@EmotionLoggerIntegrationTest
public class UserControllerTest {

    @Autowired
    UserService userService;

    @Autowired
    TestCleaner testCleaner;

    @LocalServerPort
    private int port;

    @BeforeEach
    public void setUp() {
        RestAssured.port = port;
    }

    @AfterEach
    public void tearDown() {
        testCleaner.cleanAllRepositories();
    }

    @Test
    public void shouldAddUserToDatabase() {
        //given when
        RestAssured
                .given()
                .contentType(ContentType.JSON)
                .body(UserDto.builder()
                        .id("1")
                        .firstName("Fname1")
                        .lastName("Lname1")
                        .age(20)
                        .build())
                .when()
                .post("api/user/add")
                .then()
                .statusCode(200);

        //then
        UserDto result = userService.readUser("1");
        Assertions.assertEquals(UserDto.builder()
                .id("1")
                .firstName("Fname1")
                .lastName("Lname1")
                .age(20)
                .build(), result);
    }

    @Test
    public void shouldReadUserFromDatabase() {
        //given
        UserDto userDto = UserDto.builder()
                .id("2")
                .firstName("Fname2")
                .lastName("Lname2")
                .age(20)
                .build();
        userService.createUser(userDto);

        //when then
        RestAssured
                .given()
                .when()
                .get("api/user/select/2")
                .then()
                .statusCode(200)
                .body("id", equalTo("2"),
                        "firstName", equalTo("Fname2"),
                        "lastName", equalTo("Lname2"),
                        "age", equalTo(20));
    }

    @Test
    public void shouldUpdateUserToDatabase() {
        //given
        UserDto userDto = UserDto.builder()
                .id("3")
                .firstName("FnameToUpdate")
                .lastName("LnameToUpdate")
                .age(20)
                .build();
        userService.createUser(userDto);

        //when
        RestAssured
                .given()
                .contentType(ContentType.JSON)
                .body(UserDto.builder()
                        .id("3")
                        .firstName("Fname3")
                        .lastName("Lname3")
                        .age(20)
                        .build())
                .when()
                .post("api/user/update")
                .then()
                .statusCode(200);

        //then
        UserDto result = userService.readUser("3");
        Assertions.assertEquals(UserDto.builder()
                .id("3").firstName("Fname3")
                .lastName("Lname3")
                .age(20)
                .build(), result);
    }

    @Test
    public void shouldDeleteUserFromDatabase() {
        //given
        UserDto userDto = UserDto.builder()
                .id("4")
                .firstName("Fname4")
                .lastName("Lname4")
                .age(20)
                .build();
        userService.createUser(userDto);

        //when
        RestAssured
                .given()
                .when()
                .delete("api/user/remove/4")
                .then()
                .statusCode(200);

        //then
        Assertions.assertThrows(NullPointerException.class, () -> userService.readUser("4"));
    }
}
