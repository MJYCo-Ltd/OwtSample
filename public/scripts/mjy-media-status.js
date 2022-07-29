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

    toString(){
        return '{\n\tvideoOpen:{$this.videoOpen}\n\taudioOpen:{$this.audioOpen}\n\videoStatusChanged:{$this.videoStatusChanged}\n\audioStatusChanged:{$this.audioStatusChanged}\n}';
    }

    openVideo(bOpenVideo){
        if(this.videoOpen !== bOpenVideo){
            this.videoStatusChanged = true;
        }
    }

    openAudio(bOpenAuduio){
        if(this.audioOpen !== bOpenAuduio){
            this.audioStatusChanged = true;
        }
    }

    mediaStatusChanged(){
        if(this.audioStatusChanged){
            this.audioStatusChanged = false;
            this.audioOpen = !this.audioOpen;
        }

        if(this.videoStatusChanged){
            this.videoStatusChanged = false;
            this.videoOpen = !this.videoOpen;
        }
    }

    stopMediaChange(){
        this.audioStatusChanged = false;
        this.videoStatusChanged = false;
    }

    currentStatus(){
        return {video:(this.videoStatusChanged?!this.videoOpen:this.videoOpen),audio:(this.audioStatusChanged?!this.audioOpen:this.audioOpen)};
    }

    isStopMedia(){
        return (((this.videoStatusChanged ? !this.videoOpen : this.videoOpen) === false) 
        && ((this.audioStatusChanged ? !this.audioOpen : this.audioOpen) === false));
    }

    isStatusChanged(){
        return this.videoStatusChanged || this.audioStatusChanged;
    }
}