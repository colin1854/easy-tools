package com.colin.manage.service;

import org.springframework.util.CollectionUtils;
import org.thymeleaf.util.StringUtils;

import java.util.*;

public class AnxiangeSpiderService implements SpiderService{
    public static final String PARENT_PATH = "F:/";

    @Override
    public void handle(String url) {
        if(isListUrl(url)){
            Map<String,List<String>> listMap = getItemUrls(url);
            if(!CollectionUtils.isEmpty(listMap)){
                for(Map.Entry<String, List<String>> entry : listMap.entrySet()){
                    String name = entry.getKey();
                    List<String> itemUrlList = entry.getValue();
                    for(String itemUrl : itemUrlList){
                        String fileName = name + System.currentTimeMillis();
                        String absPath = downloadItem(itemUrl,fileName);
                        if(StringUtils.isEmpty(absPath)){
                            System.out.println("抓取异常:"+itemUrl);
                        }
                    }
                }
            }
        }else {

        }
    }

    private String downloadItem(String itemUrl, String fileName) {

        return null;
    }

    private boolean isListUrl(String url) {
        return false;
    }

    public Map<String,List<String>> getItemUrls(String listUrl){

        Map<String,List<String>> map = new HashMap<>();
        List<String> itemUrl = new ArrayList<>();

        return map;

    }

    public void getConFromList(String url){
        String respBody = getResp(url);

    }

    private String getResp(String url) {
        return null;
    }


}
