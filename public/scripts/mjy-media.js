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

var videoDeviceIds = [];
var audioDevIds = [];
var videoOpen = false;
var audioOpen = false;

/// 获取设备ID
navigator.mediaDevices.enumerateDevices().then(function (devices) {
    devices.forEach(function (device) {
        if (device.kind === "videoinput") {
            videoDeviceIds.push(device);
        } else if (device.kind === "audioinput") {
            audioDevIds.push(device);
        }
    });
    console.log("videoDeviceIds",videoDeviceIds);
    console.log("audioDevIds",audioDevIds);
}).catch(function (err) {
    console.log(err.name + ": " + err.message);
});

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
    console.log("before", $('.local video').get(0).srcObject);
    console.log(steam);
    if (steam) {
        steam.getTracks().forEach(function (track) {
            track.stop();
        })
    }
}

/// 获取视频流
function onGetMediaSuccess(mediaStream) {
    destoryMediaStream();
    $('.local video').get(0).srcObject = mediaStream;
}

function onGetMediaError(error) {
    console.log("错误：", error);
}

/// 相应按下按钮
function mediaChanged() {
    if (false === audioOpen && false === videoOpen) {
        destoryMediaStream();
    } else {
        getUserMedia({ video: videoOpen, audio: audioOpen }, onGetMediaSuccess, onGetMediaError);
    }
}

/// 打开视频
function openVideo() {
    videoOpen = true;
    mediaChanged();
}

/// 关闭视频
function closeVideo() {
    videoOpen = false;
    mediaChanged();
}

/// 打开麦克风
function openAudio() {
    audioOpen = true;
    mediaChanged();
}

/// 关闭麦克风
function closeAudio() {
    audioOpen = false;
    mediaChanged();
}