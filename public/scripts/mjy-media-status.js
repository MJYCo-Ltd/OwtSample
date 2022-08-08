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

export class MediaDeviceStatus {
    constructor() {
        this.videoOpen = false;
        this.audioOpen = false;
        this.videoStatusChanged = false;
        this.audioStatusChanged = false;
        this.clearDeviceList();
    }

    /// 放入音频设备
    pushAudioDevice(sAudioDeviceID){
        this.audioDeviceList.push(sAudioDeviceID);
        if(-1 === this.audioDeviceIndex){
            this.audioDeviceIndex = 0;
        }
    }

    /// 放入视频设备
    pushVideoDevice(sVideoDeviceID){
        this.videoDeviceList.push(sVideoDeviceID);
        if(-1 === this.videoDeviceIndex){
            this.videoDeviceIndex = 0;
        }
    }

    /// 更改音频设备
    changeAudio(nIndex){
        if(nIndex >-1 && nIndex < this.audioDeviceList.length){
            this.audioDeviceIndex = nIndex;
        }
    }

    /// 更改视频设备
    changeVideo(nIndex){
        if(nIndex >-1 && nIndex < this.videoDeviceList.length){
            this.audioDeviceIndex = nIndex;
        }
    }

    /// 清空设备列表
    clearDeviceList(){
        this.audioDeviceList = [];
        this.videoDeviceList = [];
        this.audioDeviceIndex = -1;
        this.videoDeviceIndex = -1;
    }

    /// 类转换成字符串
    toString() {
        return '{\n\tvideoOpen:{$this.videoOpen}\
                 \n\taudioOpen:{$this.audioOpen}\
                 \n\tvideoStatusChanged:{$this.videoStatusChanged}\
                 \n\taudioStatusChanged:{$this.audioStatusChanged}\
                 \n\taudioList:{$this.audioDeviceList}\
                 \n\tvideoList:{$this.videoDeviceList}\
                 \n}';
    }

    /// 打开摄像头
    openVideo(bOpenVideo) {
        if (this.videoOpen !== bOpenVideo) {
            this.videoStatusChanged = true;
        }
    }

    /// 打开麦克风
    openAudio(bOpenAuduio) {
        if (this.audioOpen !== bOpenAuduio) {
            this.audioStatusChanged = true;
        }
    }

    /// 关闭声音
    closeAudioUI() {
        audioObj.attr('src', "./images/audioclose.svg");
        audioObj.unbind('click');
        audioObj.bind('click', openAudio);
    }

    /// 关闭视频
    closeVideoUI() {
        videoObj.attr('src', "./images/videoclose.svg");
        videoObj.unbind('click');
        videoObj.bind('click', openVideo);
        selfVideoObj.unbind('dblclick');
    }

    fullScreen(){
        this.showFullScreen('selfVideo');
    }

    /// 全屏显示某个
    showFullScreen(id) {
        var element = document.getElementById(id);
        if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }

    /// 媒体状态更改
    mediaStatusChanged() {
        if (this.audioStatusChanged) {
            this.audioStatusChanged = false;
            this.audioOpen = !this.audioOpen;

            if (this.audioOpen) {
                audioObj.attr('src', "./images/audio.svg");
                audioObj.unbind('click');
                audioObj.bind('click', closeAudio);
            }else{
                this.closeAudioUI();
            }
        }

        if (this.videoStatusChanged) {
            this.videoStatusChanged = false;
            this.videoOpen = !this.videoOpen;

            if (this.videoOpen) {
                videoObj.attr('src', "./images/video.svg");
                videoObj.unbind('click');
                videoObj.bind('click', closeVideo);
                selfVideoObj.bind('dblclick',this.fullScreen);
            }else{
                this.closeVideoUI();
            }
        }
    }

    /// 将修改状态置成false
    stopMediaChange() {
        this.audioStatusChanged = false;
        this.videoStatusChanged = false;
    }

    currentOptions(){
        let obj = {
            video: (this.videoStatusChanged ? !this.videoOpen : this.videoOpen),
            audio: (this.audioStatusChanged ? !this.audioOpen : this.audioOpen)
        }
        return(obj);
    }

    /// 获取当前的状态
    currentStatus() {
        let obj = this.currentOptions();

        /// 如果开启了音频
        if(obj.audio){
            if(this.audioDeviceIndex > -1){
                obj.audio = {
                    advanced:[
                        {deviceId:this.audioDeviceList[this.audioDeviceIndex]},
                        {channelCount:2}
                    ]
                }
            }
        }

        /// 如果开启了视频
        if(obj.video){
            if(this.videoDeviceIndex > -1){
                obj.video = {
                    advanced:[
                        {deviceId:this.videoDeviceList[this.videoDeviceIndex]},
                        {facingMode:'user'}
                    ]
                }
            }
        }

        return(obj);
    }

    /// 是否没有打开音视频
    isStopMedia() {
        return (((this.videoStatusChanged ? !this.videoOpen : this.videoOpen) === false)
            && ((this.audioStatusChanged ? !this.audioOpen : this.audioOpen) === false));
    }

    /// 是否由状态更改
    isStatusChanged() {
        return this.videoStatusChanged || this.audioStatusChanged;
    }
}