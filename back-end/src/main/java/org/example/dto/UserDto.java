package org.example.dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDto {
    private String username;

    private String password;

    private String nickname;

    private String nationality;

    private String profileImg;

    private LocalDateTime joinedAt;

    private String loginSource;
}
