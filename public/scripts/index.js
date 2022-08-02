// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
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

// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

// This file is borrowed from lynckia/licode with some modifications.

'use strict';

let conference;
let cameraPublicationArray = [];
// Change to your sample server's URL if it's not deployed on the same machine
// as this page.
const serverUrlBase = undefined;
let localStream;
let myId;
let myRoom;

function clearAllCameraPublication(){
    cameraPublicationArray.forEach(element => {
        element.stop();
    });
    cameraPublicationArray=[];
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(
        /\+/g, ' '));
}

/// 移除指定ID的值
function removeUi(id) {
    $(`#${id}`).remove();
}

const runSocketIOSample = function () {
    checkMedia();

    /// 创建会议
    conference = new Owt.Conference.ConferenceClient();
}


window.onload = function () {
    createToken('', 'user', 'presenter', function (response) {
        var token = response;
        conference.join(token).then(resp => {
            myId = resp.self.id;
            myRoom = resp.id;
            var participants = resp.participants;
            console.log('Participants in conference: ' + participants.length);

            var streams = resp.remoteStreams;
            for (const stream of streams) {
                if (stream.source.audio === 'mixed' || stream.source.video ===
                    'mixed') {
                    conference.subscribe(stream)
                        .then((subscription) => {
                            $('.mixstream video').get(0).srcObject = subscription.stream;
                        }, (err) => {
                            console.log('subscribe failed', err);
                        });
                }
            }
        }, function (err) {
            console.error('server connection failed:', err);
        });
    }, serverUrlBase);
};

window.onbeforeunload = function (event) {
    if (conference) conference.leave();
    clearAllCameraPublication();
}