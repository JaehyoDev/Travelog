package org.example.model;

import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDateTime;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String nickname;

    private String nationality;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "joined_at")
    private LocalDateTime joinedAt;

    @Column(name = "login_source")
    private String loginSource;

}
