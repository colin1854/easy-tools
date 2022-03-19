package com.colin.manage.model;

public class DownloadRequest {

    String url;
    String type;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "DownloadRequest{" +
                "url='" + url + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
