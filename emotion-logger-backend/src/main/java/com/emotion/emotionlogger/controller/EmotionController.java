package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.dto.EmotionDto;
import com.emotion.emotionlogger.service.EmotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/emotion")
public class EmotionController {

    private final EmotionService emotionService;

    @PostMapping("/add")
    public void addEmotion(@RequestBody EmotionDto emotionDto) {
        emotionService.createEmotion(emotionDto);
    }

    @GetMapping()
    public List<EmotionDto> getAll() {
        return emotionService.getAll();
    }

    @PostMapping("/update")
    public void updateEmotion(@RequestBody EmotionDto emotionDto) {
        emotionService.modifyEmotion(emotionDto);
    }

    @DeleteMapping("/remove/{id}")
    public void removeEmotion(@PathVariable("id") String id) {
        emotionService.deleteEmotion(id);
    }
}
