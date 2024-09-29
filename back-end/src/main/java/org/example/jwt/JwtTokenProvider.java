package org.example.jwt;

import java.util.Base64;
import java.util.Date;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {

    private String secretKey = "seoryseoryseoryseoryseoryseoryseoryseoryseoryseoryseoryseory";

    // 토큰 유효시간 30분
    private long tokenValidTime = 30 * 60 * 1000L;

    // 객체 초기화, secretKey를 Base64로 인코딩
    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    // JWT 토큰 생성
    public String createToken(Long id, String username) {
        try {
            Claims claims = Jwts.claims().setSubject(username);
            claims.put("id", id);
            Date now = new Date();

            return Jwts.builder()
                    .setClaims(claims)
                    .setIssuedAt(now)
                    .setExpiration(new Date(now.getTime() + tokenValidTime))
                    .signWith(SignatureAlgorithm.HS256, secretKey)
                    .compact();
        } catch (Exception e) {
            System.err.println("토큰 생성 중 오류 발생: " + e.getMessage());
            return null;
        }
    }

    // 토큰에서 회원 유저네임 추출
    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }
    
    // 토큰에서 회원 식별자 추출
    public Long getId(String token) {
    	Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    	return (Long) claims.get("id");
    }

    // Request의 Header에서 token 값을 가져옵니다. "X-AUTH-TOKEN" : "TOKEN 값"
    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("X-AUTH-TOKEN");
    }

    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}
