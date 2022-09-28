package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.dto.GetReasonsResponse;
import com.emotion.emotionlogger.dto.ReasonDto;
import com.emotion.emotionlogger.service.ReasonService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/reason")
public class ReasonController {

    private final ReasonService reasonService;

    @PostMapping("/add")
    public void addReason(@RequestBody ReasonDto reasonDto) {
        reasonService.createReason(reasonDto);
    }

    @GetMapping("/select")
    public GetReasonsResponse selectReasons() {
        List<ReasonDto> reasons = reasonService.selectReasons();
        GetReasonsResponse getReasonsResponse = new GetReasonsResponse(reasons);
        return getReasonsResponse;
    }

    @PostMapping("/update")
    public void updateReason(@RequestBody ReasonDto reasonDto) {
        reasonService.modifyReason(reasonDto);
    }

    @DeleteMapping("/remove/{id}")
    public void removeReason(@PathVariable String id) {
        reasonService.deleteReason(id);
    }
}
