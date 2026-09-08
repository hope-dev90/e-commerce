package com.hope.message.services;

import com.hope.message.dto.MessageDto;
import com.hope.message.entity.MessageEntity;
import com.hope.message.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final JavaMailSender mailSender;

    @Value("${app.mail.recipient}")
    private String recipient;

    @Value("${spring.mail.username}")
    private String sender;

    public MessageService(MessageRepository messageRepository, JavaMailSender mailSender) {
        this.messageRepository = messageRepository;
        this.mailSender = mailSender;
    }

    public MessageDto createMessage(MessageDto dto) {
        // Persist the message
        MessageEntity entity = new MessageEntity(
                dto.getName(),
                dto.getEmail(),
                dto.getSubject(),
                dto.getMessage()
        );
        messageRepository.save(entity);

        // Send notification email
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom(sender);
        mail.setTo(recipient);
        mail.setReplyTo(dto.getEmail());
        mail.setSubject("New contact message: " + dto.getSubject());
        mail.setText(
                "From: " + dto.getName() + " <" + dto.getEmail() + ">\n\n"
                + dto.getMessage()
        );
        mailSender.send(mail);

        return dto;
    }
}
