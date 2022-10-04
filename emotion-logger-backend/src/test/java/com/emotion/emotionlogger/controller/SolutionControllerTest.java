package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.EmotionLoggerIntegrationTest;
import com.emotion.emotionlogger.dto.SolutionDto;
import com.emotion.emotionlogger.service.SolutionService;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.server.LocalServerPort;

import java.util.List;

@EmotionLoggerIntegrationTest
@Disabled
public class SolutionControllerTest {

    @Autowired
    SolutionService solutionService;

    @Autowired
    TestCleaner testCleaner;

    @LocalServerPort
    private int port;

    @BeforeEach
    public void setUp() {
        RestAssured.port = port;
        testCleaner.cleanAllRepositories();
    }

//    @AfterEach
//    public void tearDown() {
//        testCleaner.cleanAllRepositories();
//    }

    @Test
    public void shouldAddSolutionToDatabase() {
        //given when
        RestAssured
                .given()
                .contentType(ContentType.JSON)
                .body(SolutionDto.builder().id("1").name("Solution1").build())
                .when()
                .post("api/solution/add")
                .then()
                .statusCode(200);

        //then
        List<SolutionDto> result = solutionService.selectSolutions();
        Assertions.assertEquals(List.of(SolutionDto.builder()
                .id("1")
                .name("Solution1")
                .build()), result);
    }

    @Test
    public void shouldReadSolutionFromDatabase() {
        //given
        solutionService.createSolution(SolutionDto.builder()
                .id("2")
                .name("Solution2")
                .build());

        //when then
        List<SolutionDto> result = RestAssured
                .given()
                .when()
                .get("api/solution/select")
                .then()
                .statusCode(200)
                .extract()
                .body()
                .jsonPath()
                .getList("solutions", SolutionDto.class);

        Assertions.assertTrue(result.contains(SolutionDto.builder()
                .id("2")
                .name("Solution2")
                .build()));
    }

    @Test
    public void shouldUpdateSolutionToDatabase() {
        //given when
        RestAssured
                .given()
                .contentType(ContentType.JSON)
                .body(SolutionDto.builder().id("3").name("Solution3").build())
                .when()
                .post("api/solution/update")
                .then()
                .statusCode(200);

        //then
        List<SolutionDto> result = solutionService.selectSolutions();
        Assertions.assertEquals(List.of(SolutionDto.builder()
                .id("3")
                .name("Solution3")
                .build()), result);
    }

    @Test
    public void shouldDeleteSolutionFromDatabase() {
        //given
        solutionService.createSolution(SolutionDto.builder()
                .id("4")
                .name("Solution4")
                .build());

        //when
        RestAssured
                .given()
                .when()
                .delete("api/solution/remove/4")
                .then()
                .statusCode(200);

        //then
        List<SolutionDto> result = solutionService.selectSolutions();
        Assertions.assertEquals(List.of(), result);

    }
}