package com.emotion.emotionlogger.controller;

import com.emotion.emotionlogger.dto.EmotionDto;
import com.emotion.emotionlogger.service.EmotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/emotion")
public class EmotionController {

    private final EmotionService emotionService;

    @PostMapping("/add")
    public void addEmotion(@RequestBody EmotionDto emotionDto) {
        emotionService.createEmotion(emotionDto);
    }

    @GetMapping("/select/{id}")
    public EmotionDto selectEmotion(@PathVariable String id) {
        return emotionService.readEmotion(id);
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
