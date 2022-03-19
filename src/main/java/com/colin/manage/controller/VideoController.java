package com.colin.manage.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.colin.manage.model.DownloadRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static com.colin.manage.constant.DownloadConstant.DOU_YIN;

@Controller
public class VideoController {

    @RequestMapping(value = "/api/spider/download")
    @ResponseBody
    public String download(@RequestBody DownloadRequest downloadReq){
        System.out.println(downloadReq);
        JSONObject jsonObject = new JSONObject();
        if(DOU_YIN.equals(downloadReq.getType())){


            jsonObject.put("filepath","D://douyin/"+downloadReq.getUrl());
        }

        jsonObject.put("status","ok");
        return jsonObject.toJSONString();
    }
}
