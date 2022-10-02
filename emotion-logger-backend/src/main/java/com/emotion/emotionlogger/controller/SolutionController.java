package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.dto.GetSolutionsResponse;
import com.emotion.emotionlogger.dto.SolutionDto;
import com.emotion.emotionlogger.service.SolutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/solution")
public class SolutionController {

    private final SolutionService solutionService;

    @PostMapping("/add")
    public void addSolution(@RequestBody SolutionDto solutionDto) {
        solutionService.createSolution(solutionDto);
    }

    @GetMapping("/select")
    public GetSolutionsResponse selectSolutions() {
        List<SolutionDto> solutions = solutionService.selectSolutions();
        return new GetSolutionsResponse(solutions);
    }

    @PostMapping("/update")
    public void updateSolution(@RequestBody SolutionDto solutionDto) {
        solutionService.modifySolution(solutionDto);
    }

    @DeleteMapping("/remove/{id}")
    public void removeSolution(@PathVariable String id) {
        solutionService.deleteSolution(id);
    }
}