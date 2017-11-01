package com.maleum;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/mypage").setViewName("mypage");
        registry.addViewController("/income").setViewName("income");
        registry.addViewController("/market").setViewName("market");
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/login/email").setViewName("login-email");
    }

}
