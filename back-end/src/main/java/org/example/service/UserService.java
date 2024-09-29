package org.example.service;

import org.example.dto.LoginDto;
import org.example.dto.UserDto;
import org.example.model.User;
import org.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void join(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setNickname(userDto.getNickname());
        user.setNationality(userDto.getNationality());

        userRepository.save(user);
    }

    public User login(LoginDto loginDto) {
        Optional<User> optionalUser = userRepository.findByUsernameAndPassword(loginDto.getUsername(), loginDto.getPassword());
        return optionalUser.orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    }

}
