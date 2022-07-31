// MIT License
//
// Copyright (c) 2022 yty
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Copyright (C) <2022> MJYTECH
//
// SPDX-License-Identifier: Apache-2.0

// 该文件由杨天宇编写.
'use strict';

let gMediaStatus
import("./mjy-media-status.js").then(mediaStatus => {
    gMediaStatus = new mediaStatus.MediaStatus();
})

const sVideoInput = 'videoinput';
const sAudioInput = 'audioinput';
let videoDevicShow = false;
let audioDevicShow = false;

function removeChidren(id) {
    $(`#${id}`).children().remove();
}

function checkMedia(){
    /// 获取设备ID
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let bHaveVideo=false;
        let bHaveAudio=false;
        devices.forEach(function (device) {
            if (device.kind === sVideoInput) {
                bHaveVideo = true;
            } else if(device.kind === sAudioInput){
                bHaveAudio = true;
            }
        });

        if(!bHaveAudio){
            $(`#audio`).attr('src', "./images/noaudio.svg");
        }else{
            $(`#audio`).attr('src', "./images/audioclose.svg");
            $(`#audio`).bind('click',openAudio);
        }

        if(!bHaveVideo){
            $(`#video`).attr('src', "./images/novideo.svg");
        }else{
            $(`#video`).attr('src', "./images/videoclose.svg");
            $(`#video`).bind('click',openVideo);
        }

    }).catch(function (err) {
        console.log("enumerateDevices error " + err.name + ": " + err.message);
    });
    
    $(`#screen`).bind('click',openScreen);
}

/// 关闭屏幕共享
function closeScreen(){
    var steam = $('.localscreen video').get(0).srcObject;
    if (steam) {
        steam.getTracks().forEach(function (track) {
            console.log("stop");
            track.stop();
        })
    }

    $(`#screen`).attr('src', "./images/screenclose.svg");
    $(`#screen`).unbind('click',closeScreen);
    $(`#screen`).bind('click',openScreen);
}

/// 打开屏幕共享
function openScreen(){
    navigator.mediaDevices.getDisplayMedia({video:true}).then(function (mediaStream){
        console.log("get steam");
        $('.localscreen video').get(0).srcObject = mediaStream;
        $(`#screen`).attr('src', "./images/screen.svg");
        $(`#screen`).unbind('click',openScreen);
        $(`#screen`).bind('click',closeScreen);
    }).catch(function (error){
        console.log("错误：", error);
    });
}

/// 增加选择
function addSelect(type) {
    removeChidren(type);
    /// 获取设备ID
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        devices.forEach(function (device) {
            if (device.kind === type && device.deviceId && device.deviceId.length === 64) {
                let $p = $(`<option value=${device.deviceId}>${device.label}</div>`);
                $p.appendTo($(`#${type}`));
            }
        });
    }).catch(function (err) {
        console.log("enumerateDevices error " + err.name + ": " + err.message);
    });
}

/// 适配各种内核的API
function getUserMedia(constrains, success, error) {
    if (navigator.mediaDevices.getUserMedia) {
        //最新标准API
        navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
        //webkit内核浏览器
        navigator.webkitGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.mozGetUserMedia) {
        //Firefox浏览器
        navagator.mozGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constrains).then(success).catch(error);
    }
}

/// 关闭视频流
function destoryMediaStream() {
    var steam = $('.local video').get(0).srcObject;
    if (steam) {
        steam.getTracks().forEach(function (track) {
            track.stop();
        })
    }
}

/// 成功获取视频流
function onGetMediaSuccess(mediaStream) {
    gMediaStatus.mediaStatusChanged();
    destoryMediaStream();
    $('.local video').get(0).srcObject = mediaStream;
}

/// 获取视频流失败
function onGetMediaError(error) {
    gMediaStatus.stopMediaChange();
    console.log("错误：", error);
}

/// 相应按下按钮
function mediaChanged() {
    if (gMediaStatus.isStatusChanged()) {
        if (gMediaStatus.isStopMedia()) {
            destoryMediaStream();
            gMediaStatus.mediaStatusChanged();
        } else {
            let currentStatus = gMediaStatus.currentStatus();
            getUserMedia(currentStatus, onGetMediaSuccess, onGetMediaError);
        }
    }
}

/// 打开视频
function openVideo() {
    gMediaStatus.openVideo(true);
    mediaChanged();
    if (!videoDevicShow) {
        addSelect(sVideoInput);
        videoDevicShow = true;
    }
}

/// 关闭视频
function closeVideo() {
    gMediaStatus.openVideo(false);
    mediaChanged();
}

/// 打开麦克风
function openAudio() {
    gMediaStatus.openAudio(true);
    mediaChanged();
    if (!audioDevicShow) {
        addSelect(sAudioInput);
        audioDevicShow = true;
    }
}

/// 关闭麦克风
function closeAudio() {
    gMediaStatus.openAudio(false);
    mediaChanged();
}