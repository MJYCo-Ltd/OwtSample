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

export class MediaStatus{
    constructor(){
        this.videoOpen = false;
        this.audioOpen = false;
        this.videoStatusChanged = false;
        this.audioStatusChanged = false;
    }

    /// 类转换成字符串
    toString(){
        return '{\n\tvideoOpen:{$this.videoOpen}\
                 \n\taudioOpen:{$this.audioOpen}\
                 \n\tvideoStatusChanged:{$this.videoStatusChanged}\
                 \n\taudioStatusChanged:{$this.audioStatusChanged}\
                 \n}';
    }

    /// 打开摄像头
    openVideo(bOpenVideo){
        if(this.videoOpen !== bOpenVideo){
            this.videoStatusChanged = true;
        }
    }

    /// 打开麦克风
    openAudio(bOpenAuduio){
        if(this.audioOpen !== bOpenAuduio){
            this.audioStatusChanged = true;
        }
    }

    /// 媒体状态更改
    mediaStatusChanged(){
        if(this.audioStatusChanged){
            this.audioStatusChanged = false;
            this.audioOpen = !this.audioOpen;

            if(this.audioOpen){
                $(`#audio`).attr('src', "./images/audio.svg");
                $(`#audio`).unbind('click',openAudio);
                $(`#audio`).bind('click',closeAudio);  
                console.log("open audio");
            }else{
                $(`#audio`).attr('src', "./images/audioclose.svg");
                $(`#audio`).unbind('click',closeAudio);
                $(`#audio`).bind('click',openAudio);
                console.log("close audio");
            }
        }

        if(this.videoStatusChanged){
            this.videoStatusChanged = false;
            this.videoOpen = !this.videoOpen;

            if(this.videoOpen){
                $(`#video`).attr('src', "./images/video.svg");
                $(`#video`).unbind('click',openVideo);
                $(`#video`).bind('click',closeVideo);  
                console.log("open video");
            }else{
                $(`#video`).attr('src', "./images/videoclose.svg");
                $(`#video`).unbind('click',closeVideo);
                $(`#video`).bind('click',openVideo);
                console.log("close video");
            }
        }
    }

    /// 将修改状态置成false
    stopMediaChange(){
        this.audioStatusChanged = false;
        this.videoStatusChanged = false;
    }

    /// 获取当前的状态
    currentStatus(){
        return {video:(this.videoStatusChanged?!this.videoOpen:this.videoOpen),
                audio:(this.audioStatusChanged?!this.audioOpen:this.audioOpen)};
    }

    /// 是否没有打开音视频
    isStopMedia(){
        return (((this.videoStatusChanged ? !this.videoOpen : this.videoOpen) === false) 
        && ((this.audioStatusChanged ? !this.audioOpen : this.audioOpen) === false));
    }

    /// 是否由状态更改
    isStatusChanged(){
        return this.videoStatusChanged || this.audioStatusChanged;
    }
}