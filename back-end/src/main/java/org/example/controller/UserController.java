package org.example.controller;

import org.example.dto.LoginDto;
import org.example.dto.UserDto;
import org.example.jwt.JwtTokenProvider;
import org.example.model.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody UserDto userDto) {
        userService.join(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        try {
            User user = userService.login(loginDto);
            System.out.println("유저아이디 : " + user.getId());
            // 로그인 성공
            String token = jwtTokenProvider.createToken(user.getId(), user.getUsername());
            System.out.println("로그인 성공!, 토큰 : " + token);
            return ResponseEntity.status(HttpStatus.OK).body(token);
        } catch (UsernameNotFoundException e) {
            // 사용자 찾기 실패
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            // 다른 예외 상황
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류");
        }
    }

}
