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

let gMediaDeviceStatus;
import("./mjy-media-status.js").then(mediaStatus => {
    gMediaDeviceStatus = new mediaStatus.MediaDeviceStatus();
})

const sVideoInput = 'videoinput';
const sAudioInput = 'audioinput';

let screenObj = $(`#screen`);
let audioObj = $(`#audio`);
let videoObj = $(`#video`);
let selfVideoObj = $(`#selfVideo`);
let localScreenObj = $('.localscreen video').get(0);
let localObj = $('.local video').get(0);
let bCheckedMedia = false;

/// 绑定默认的点击事件
audioObj.bind('click', openAudio);
videoObj.bind('click', openVideo);
screenObj.bind('click', openScreen);

function removeChidren(id) {
    $(`#${id}`).children().remove();
}

navigator.mediaDevices.ondevicechange = deviceChanged;

/// 媒体设备状态更改
function deviceChanged(event) {
    checkMedia();
}

/// 用于获取媒体信息
function onGetMediaInfo(mediaStream) {
    mediaStream.getTracks().forEach(function (track) {
        track.stop();
    });

    /// 清空列表
    gMediaDeviceStatus.clearDeviceList();

    /// 获取设备ID
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let bHaveVideo = false;
        let bHaveAudio = false;
        let nAudioIndex = 0;
        let nVideoIndex = 0;
        removeChidren(sVideoInput);
        removeChidren(sAudioInput);

        devices.forEach(function (device) {
            if (device.kind === sVideoInput) {
                if (device.deviceId && device.deviceId.length === 64) {
                    let $p = $(`<option value=${nVideoIndex}>${device.label}</div>`);
                    $p.appendTo($(`#${sVideoInput}`));
                    gMediaDeviceStatus.pushVideoDevice(device.deviceId);
                    ++nVideoIndex;
                }
                bHaveVideo = true;
            } else if (device.kind === sAudioInput) {
                if (device.deviceId && device.deviceId.length === 64) {
                    let $p = $(`<option value=${nAudioIndex}>${device.label}</div>`);
                    $p.appendTo($(`#${sAudioInput}`));
                    gMediaDeviceStatus.pushAudioDevice(device.deviceId);
                    ++nAudioIndex;
                }
                bHaveAudio = true;
            }
        });

        if (!bHaveAudio) {
            audioObj.attr('src', "./images/noaudio.svg");
        }

        if (!bHaveVideo) {
            videoObj.attr('src', "./images/novideo.svg");
        }

    }).catch(function (err) {
        console.log("enumerateDevices error " + err.name + ": " + err.message);
    });

    bCheckedMedia = true;
}

/// 检查媒体是否支持视频或者音频
function checkMedia() {
    getUserMedia({ video: true, audio: true },onGetMediaInfo, onGetMediaError);
}

function closeScreenUI() {
    screenObj.attr('src', "./images/screenclose.svg");
    screenObj.unbind('click', closeScreen);
    screenObj.bind('click', openScreen);
}

/// 关闭屏幕共享
function closeScreen() {
    var steam = localScreenObj.srcObject;
    if (steam) {
        steam.getTracks().forEach(function (track) {
            track.stop();
        })
    }
    closeScreenUI();
}

function openScreenUI() {
    screenObj.attr('src', "./images/screen.svg");
    screenObj.unbind('click', openScreen);
    screenObj.bind('click', closeScreen);
}

/// 打开屏幕共享
function openScreen() {
    navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(function (mediaStream) {
        localScreenObj.srcObject = mediaStream;
        openScreenUI();
        mediaStream.getVideoTracks()[0].addEventListener('ended', closeScreenUI);
    }).catch(function (error) {
        console.log("错误：", error);
    });
}

/// 适配各种内核的API
function getUserMedia(constrains, success, error) {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.mozGetUserMedia) {
        navagator.mozGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.getUserMedia) {
        navigator.getUserMedia(constrains).then(success).catch(error);
    }
}

/// 关闭视频流
function destoryMediaStream() {
    var steam = localObj.srcObject;
    if (steam) {
        steam.getTracks().forEach(function (track) {
            track.stop();
        })

        clearAllCameraPublication();

        localObj.srcObject = null;
    }
}

/// 成功获取视频流
function onGetMediaSuccess(mediaStream) {
    gMediaDeviceStatus.mediaStatusChanged();
    destoryMediaStream();
    let videoTracks = mediaStream.getVideoTracks();
    if (videoTracks && videoTracks.length > 0) videoTracks[0].addEventListener('ended', gMediaDeviceStatus.closeVideoUI);

    let audioTracks = mediaStream.getAudioTracks();
    if (audioTracks && audioTracks.length > 0) audioTracks[0].addEventListener('ended', gMediaDeviceStatus.closeAudioUI);

    localObj.srcObject = mediaStream;

    conference.publish(new Owt.Base.LocalStream(mediaStream, new Owt.Base.StreamSourceInfo('mic', 'camera')),
     gMediaDeviceStatus.currentStatus()).then(publication => {
        cameraPublicationArray.push(publication);
        mixStream(myRoom, publication.id, 'common', serverUrlBase)
        publication.addEventListener('error', (err) => {
            console.log('Publication error: ' + err.error.message);
        });
    });
}

/// 获取视频流失败
function onGetMediaError(error) {
    gMediaDeviceStatus.stopMediaChange();
    console.log("错误：", error);
}

/// 相应按下按钮
function mediaChanged() {
    if (gMediaDeviceStatus.isStatusChanged()) {
        if (gMediaDeviceStatus.isStopMedia()) {
            destoryMediaStream();
            gMediaDeviceStatus.mediaStatusChanged();
        } else getUserMedia(gMediaDeviceStatus.currentStatus(), onGetMediaSuccess, onGetMediaError);
    }
}

/// 打开视频
function openVideo() {
    if(!bCheckedMedia) checkMedia();
    gMediaDeviceStatus.openVideo(true);
    mediaChanged();
}

/// 关闭视频
function closeVideo() {
    gMediaDeviceStatus.openVideo(false);
    mediaChanged();
}

/// 打开麦克风
function openAudio() {
    if(!bCheckedMedia) checkMedia();
    gMediaDeviceStatus.openAudio(true);
    mediaChanged();
}

/// 关闭麦克风
function closeAudio() {
    gMediaDeviceStatus.openAudio(false);
    mediaChanged();
}