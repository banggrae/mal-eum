package com.maleum;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/mypage").setViewName("mypage");
//        registry.addViewController("/").setViewName("index");
        registry.addViewController("/income").setViewName("income");
        registry.addViewController("/market").setViewName("market");
        registry.addViewController("/login").setViewName("login");
//        registry.addViewController("/login/naver").setViewName("login-naver");
//        registry.addViewController("/login/kakao").setViewName("login-kakao");
//        registry.addViewController("/login/facebook").setViewName("login-facebook");
//        registry.addViewController("/login/google").setViewName("login-google");
    }

}
