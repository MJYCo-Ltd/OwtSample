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

var conference;
var publicationGlobal;
var videoDeviceIds = [];
var audioDevIds = [];

// Change to your sample server's URL if it's not deployed on the same machine
// as this page.
const serverUrlBase = undefined;
let localStream;

function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(
        /\+/g, ' '));
}

const runSocketIOSample = function () {
    return;
    let showedRemoteStreams = [];
    let myId;
    let subscriptionForMixedStream;
    let myRoom;

    var subscribeForward = getParameterByName('forward') === 'true' ? true : false;
    var isSelf = getParameterByName('self') === 'false' ? false : true;
    conference = new Owt.Conference.ConferenceClient();
    function createResolutionButtons(stream, subscribeResolutionCallback) {
        let $p = $(`#${stream.id}resolutions`);
        if ($p.length === 0) {
            $p = $(`<div id=${stream.id}resolutions> </div>`);
            $p.appendTo($('body'));
        }
        // Resolutions from settings.
        for (const videoSetting of stream.settings.video) {
            const resolution = videoSetting.resolution;
            if (resolution) {
                const button = $('<button/>', {
                    text: resolution.width + 'x' +
                        resolution.height,
                    click: () => {
                        subscribeResolutionCallback(stream, resolution);
                    }
                });
                button.prependTo($p);
            }
        }
        // Resolutions from extraCapabilities.
        for (const resolution of stream.extraCapabilities.video.resolutions.reverse()) {
            const button = $('<button/>', {
                text: resolution.width + 'x' +
                    resolution.height,
                click: () => {
                    subscribeResolutionCallback(stream, resolution);
                }
            });
            button.prependTo($p);
        };
        return $p;
    }
    function subscribeAndRenderVideo(stream) {
        let subscirptionLocal = null;
        function subscribeDifferentResolution(stream, resolution) {
            subscirptionLocal && subscirptionLocal.stop();
            subscirptionLocal = null;
            const videoOptions = {};
            videoOptions.resolution = resolution;
            conference.subscribe(stream, {
                audio: true,
                video: videoOptions
            }).then((
                subscription) => {
                subscirptionLocal = subscription;
                $(`#${stream.id}`).get(0).srcObject = subscription.stream;
            });
        }
        let $p = createResolutionButtons(stream, subscribeDifferentResolution);
        conference.subscribe(stream)
            .then((subscription) => {
                subscirptionLocal = subscription;
                let $video = $(`<video controls autoplay id=${stream.id} style="display:block" >this browser does not supported video tag</video>`);
                $video.get(0).srcObject = subscription.stream;
                $p.append($video);
            }, (err) => {
                console.log('subscribe failed', err);
            });
        stream.addEventListener('ended', () => {
            removeUi(stream.id);
            $(`#${stream.id}resolutions`).remove();
        });
        stream.addEventListener('updated', () => {
            // Update resolution buttons
            $p.children('button').remove();
            createResolutionButtons(stream, subscribeDifferentResolution);
        });
    }
    function removeUi(id) {
        $(`#${id}`).remove();
    }

    conference.addEventListener('streamadded', (event) => {
        console.log('A new stream is added ', event.stream.id);
        isSelf = isSelf ? isSelf : event.stream.id != publicationGlobal.id;
        subscribeForward && isSelf && subscribeAndRenderVideo(event.stream);
        mixStream(myRoom, event.stream.id, 'common', serverUrlBase);
        event.stream.addEventListener('ended', () => {
            console.log(event.stream.id + ' is ended.');
        });
    });


    // window.onload= function() {
    //     var simulcast = getParameterByName('simulcast') || false;
    //     var shareScreen = getParameterByName('screen') || false;
    //     myRoom = getParameterByName('room');
    //     var isHttps = (location.protocol === 'https:');
    //     var mediaUrl = getParameterByName('url');
    //     var isPublish = getParameterByName('publish');
    //     createToken(myRoom, 'user', 'presenter', function(response) {
    //         var token = response;
    //         conference.join(token).then(resp => {
    //             myId = resp.self.id;
    //             myRoom = resp.id;
    //             if(mediaUrl){
    //                  startStreamingIn(myRoom, mediaUrl, serverUrlBase);
    //             }
    //             if (isPublish !== 'false') {
    //                 // audioConstraintsForMic
    //                 let audioConstraints = new Owt.Base.AudioTrackConstraints(Owt.Base.AudioSourceInfo.MIC);
    //                 // videoConstraintsForCamera
    //                 let videoConstraints = new Owt.Base.VideoTrackConstraints(Owt.Base.VideoSourceInfo.CAMERA);
    //                 if (shareScreen) {
    //                     // audioConstraintsForScreen
    //                     audioConstraints = new Owt.Base.AudioTrackConstraints(Owt.Base.AudioSourceInfo.SCREENCAST);
    //                     // videoConstraintsForScreen
    //                     videoConstraints = new Owt.Base.VideoTrackConstraints(Owt.Base.VideoSourceInfo.SCREENCAST);
    //                 }
    //
    //                 console.log(vdeviceId);
    //                 let mediaStream;
    //                 videoConstraints.frameRate = 15
    //                 videoConstraints.bitrate = 'x0.2'
    //                 videoConstraints.keyFrameInterval = 100
    //                 videoConstraints.deviceId = vdeviceId;
    //                 videoConstraints.resolution = { width: 480, height: 360 }
    //                 console.log(vdeviceId);
    //
    //                 Owt.Base.MediaStreamFactory.createMediaStream(new Owt.Base.StreamConstraints(
    //                     audioConstraints, videoConstraints)).then(stream => {
    //                     let publishOption;
    //                     if (simulcast) {
    //                         publishOption = {video:[
    //                             {rid: 'q', active: true/*, scaleResolutionDownBy: 4.0*/},
    //                             {rid: 'h', active: true/*, scaleResolutionDownBy: 2.0*/},
    //                             {rid: 'f', active: true}
    //                         ]};
    //                     }
    //                     mediaStream = stream;
    //                     localStream = new Owt.Base.LocalStream(
    //                         mediaStream, new Owt.Base.StreamSourceInfo(
    //                             'mic', 'camera'));
    //                     $('.local video').get(0).srcObject = stream;
    //                     // Publish with RTCRtpTransceivers.
    //                     // const transceivers = [];
    //                     // for (const track of mediaStream.getTracks()) {
    //                     //   transceivers.push(
    //                     //       conference.peerConnection.addTransceiver(track, {
    //                     //         direction: 'sendonly',
    //                     //         streams: [stream],
    //                     //       }));
    //                     // }
    //                     // publication =
    //                     //     await conference.publish(localStream, transceivers);
    //
    //                     // Publish with options.
    //                     conference.publish(localStream, publishOption).then(publication => {
    //                         publicationGlobal = publication;
    //                         mixStream(myRoom, publication.id, 'common', serverUrlBase)
    //                         publication.addEventListener('error', (err) => {
    //                             console.log('Publication error: ' + err.error.message);
    //                         });
    //                     });
    //                 }, err => {
    //                     console.error('Failed to create MediaStream, ' +
    //                         err);
    //                 });
    //             }
    //             var streams = resp.remoteStreams;
    //             for (const stream of streams) {
    //                 if(!subscribeForward){
    //                   if (stream.source.audio === 'mixed' || stream.source.video ===
    //                     'mixed') {
    //                     subscribeAndRenderVideo(stream);
    //                   }
    //                 } else if (stream.source.audio !== 'mixed') {
    //                     subscribeAndRenderVideo(stream);
    //                 }
    //             }
    //             console.log('Streams in conference:', streams.length);
    //             var participants = resp.participants;
    //             console.log('Participants in conference: ' + participants.length);
    //         }, function(err) {
    //             console.error('server connection failed:', err);
    //             if (err.message.indexOf('connect_error:') >= 0) {
    //                 const signalingHost = err.message.replace('connect_error:', '');
    //                 const signalingUi = 'signaling';
    //                 removeUi(signalingUi);
    //                 let $p = $(`<div id=${signalingUi}> </div>`);
    //                 const anchor = $('<a/>', {
    //                     text: 'Click this for testing certificate and refresh',
    //                     target: '_blank',
    //                     href: `${signalingHost}/socket.io/`
    //                 });
    //                 anchor.appendTo($p);
    //                 $p.appendTo($('body'));
    //             }
    //         });
    //     }, serverUrlBase);
    // };
};

/// 适配各种内核的API
function getUserMedia(constrains,success,error){
    if(navigator.mediaDevices.getUserMedia){
        //最新标准API
        navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia){
        //webkit内核浏览器
        navigator.webkitGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.mozGetUserMedia){
        //Firefox浏览器
        navagator.mozGetUserMedia(constrains).then(success).catch(error);
    } else if (navigator.getUserMedia){
        //旧版API
        navigator.getUserMedia(constrains).then(success).catch(error);
    }
}

function onGetMediaSuccess(MediaStream){
    /// 查询摄像头
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        devices.forEach(function (device) {
            if (device.kind === "videoinput") {
                videoDeviceIds[videoDeviceIds.length] = device.deviceId;
            } else if (device.kind === "audioinput") {
                audioDevIds[audioDevIds.length] = device.deviceId;
            }
        });
        /// 如果有摄像头头
        if (videoDeviceIds.length > 0) {
            var simulcast = getParameterByName('simulcast') || false;
            var shareScreen = getParameterByName('screen') || false;
            let audioConstraints = new Owt.Base.AudioTrackConstraints(Owt.Base.AudioSourceInfo.MIC);
            // videoConstraintsForCamera
            let videoConstraints = new Owt.Base.VideoTrackConstraints(Owt.Base.VideoSourceInfo.CAMERA);
            //if (shareScreen) {
            // audioConstraintsForScreen
            //audioConstraints = new Owt.Base.AudioTrackConstraints(Owt.Base.AudioSourceInfo.SCREENCAST);
            // videoConstraintsForScreen
            //videoConstraints = new Owt.Base.VideoTrackConstraints(Owt.Base.VideoSourceInfo.SCREENCAST);
            //}
            let mediaStream;
            videoConstraints.frameRate = 15
            videoConstraints.bitrate = 'x0.2'
            videoConstraints.keyFrameInterval = 100
            videoConstraints.deviceId = videoDeviceIds[0];
            console.log("videoConstraints.deviceId", videoConstraints.deviceId);
            videoConstraints.resolution = { width: 480, height: 360 }
            Owt.Base.MediaStreamFactory.createMediaStream(new Owt.Base.StreamConstraints(
                audioConstraints, videoConstraints)).then(stream => {
                    let publishOption;
                    if (simulcast) {
                        publishOption = {
                            video: [
                                { rid: 'q', active: true/*, scaleResolutionDownBy: 4.0*/ },
                                { rid: 'h', active: true/*, scaleResolutionDownBy: 2.0*/ },
                                { rid: 'f', active: true }
                            ]
                        };
                    }
                    mediaStream = stream;
                    localStream = new Owt.Base.LocalStream(
                        mediaStream, new Owt.Base.StreamSourceInfo(
                            'mic', 'camera'));
                    $('.local video').get(0).srcObject = stream;
                }, function onError(error) {
                    console.log("错误：", error);
                });
        } else {
            alert("本设备没有摄像头")

        }
    }).catch(function (err) {
        console.log(err.name + ": " + err.message);
    });
}

function onGetMediaError(error){
    console.log("错误：", error);
}
function buttonClick() {
    /// 获取权限
    getUserMedia({ video: true, audio: true },onGetMediaSuccess,onGetMediaError);
}

window.onbeforeunload = function (event) {
    conference.leave()
    publicationGlobal.stop();
}