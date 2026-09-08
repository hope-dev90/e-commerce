package com.hope.message.controller;

import com.hope.message.dto.MessageDto;
import com.hope.message.services.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/messages")
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody MessageDto dto) {
        return ResponseEntity.ok(messageService.createMessage(dto));
    }
}
