'use strict';


function onDeviceReady() {
    (function ($) {
        $('#svg-container').load('img/dog_is_digging.svg', function () {
            var tail_angel = 0;
            var angle_delta = 1;
            var tail_box = $('#tail').get(0).getBBox();
            var tail_rotate_x = tail_box.x + tail_box.width, tail_rotate_y = tail_box.y + tail_box.height;
            var paw_box = $('#paw').get(0).getBBox();
            var paw_rotate_x = paw_box.x + paw_box.width / 2, paw_rotate_y = paw_box.y + paw_box.height / 2;

            /**
             * { angle: 10, cx: 11, cy: 12 }
             * @returns "rotate(10, 11, 12)"
             */
            function rotate_to_string(rotate) {
                return 'rotate(' + rotate.angle + ',' + rotate.cx + ',' + rotate.cy + ')'
            }

            function translate_to_string(translate) {
                return 'translate(' + translate.dx + ',' + translate.dy + ')';
            }

            function scale_to_string(scale) {
                return 'scale(' + scale.rx + ',' + scale.ry + ')';
            }

            function transform_to_string(transform) {
                switch (transform.type) {
                    case 'scale':
                        return scale_to_string(transform);
                    case 'rotate':
                        return rotate_to_string(transform);
                    case 'translate':
                        return translate_to_string(transform);
                }
            }

            function transform_delta(selector, actions) {
                var transform_str = _.map(actions, transform_to_string).join(',');
                $(selector).attr('transform', transform_str);
            }

            function swing_tail() {
                transform_delta('#tail', [
                    {type: 'rotate', angle: tail_angel, cx: tail_rotate_x, cy: tail_rotate_y}
                ]);
                if (tail_angel > 0) {
                    angle_delta = -4
                } else if (tail_angel < -16) {
                    angle_delta = 4
                }
                tail_angel += angle_delta;
            }

            function paw_move() {
                if (paw_timeline == -1 || paw_timeline > paw_repeat_time) {
                    paw_timeline = 0;
                }
                for (var i = 0; i < paw_keyframes.length - 1; i++) {
                    if (paw_keyframes[i].time <= paw_timeline && paw_keyframes[i + 1].time > paw_timeline) {
                        paw_frame_no = i;
                    }
                }
                var start_frame = paw_keyframes[paw_frame_no];
                var end_frame = paw_keyframes[paw_frame_no + 1];
                var time_ratio = (paw_timeline - start_frame.time) / (end_frame.time - start_frame.time);
                var angle_target = start_frame.angle + (end_frame.angle - start_frame.angle) * time_ratio;
                var dx = start_frame.x + (end_frame.x - start_frame.x) * time_ratio;
                var dy = start_frame.y + (end_frame.y - start_frame.y) * time_ratio;


                transform_delta('#paw', [
                    {type: 'translate', dx: dx, dy: dy},
                    {type: 'rotate', angle: angle_target, cx: paw_rotate_x, cy: paw_rotate_y}
                ]);
                paw_timeline = paw_timeline + paw_delay;
            }

            function mud_move() {
                if (mud_timeline == -1 || mud_timeline > mud_repeat_time) {
                    mud_timeline = 0;
                }
                var mud_frame_nos = [];
                for (var i = 0; i < mud_keyframes.length; i++) {
                    mud_frame_nos[i] = null;
                    for (var j = 0; j < mud_keyframes[i].length - 1; j++) {
//                    console.log('mud_keyframe['+i+']['+j+'].time='+mud_keyframes[i][j].time
//                        +';mud_timeline='+mud_timeline
//                        +'mud-keyframe['+i+']['+(j+1)+'].time='+mud_keyframes[i][j+1].time
//                    );
                        if (mud_keyframes[i][j].time <= mud_timeline && mud_keyframes[i][j + 1].time > mud_timeline) {
                            mud_frame_nos[i] = j;
                        }
                    }
                    if (mud_frame_nos[i] != null) {
                        var mud = $('#mud' + i);
                        mud.show();
                        var start_frame = mud_keyframes[i][mud_frame_nos[i]];

                        var end_frame = mud_keyframes[i][mud_frame_nos[i] + 1];
                        var time_ratio = (mud_timeline - start_frame.time) / (end_frame.time - start_frame.time);
                        var angle_target = start_frame.angle + (end_frame.angle - start_frame.angle) * time_ratio;
//                    var rx = start_frame.width * time_ratio / end_frame.width;
//                    var ry = start_frame.height * time_ratio / end_frame.height;
                        var rx = time_ratio;
                        var ry = time_ratio;
                        var dx = start_frame.x + (end_frame.x - start_frame.x) * time_ratio;
                        var dy = start_frame.y + (end_frame.y - start_frame.y) * time_ratio;
                        var mud_box = mud.get(0).getBBox();
                        var mud_rotate_x = mud_box.x + mud_box.width / 2, mud_rotate_y = mud_box.y + mud_box.height / 2;
                        transform_delta('#mud' + i, [
                            {type: 'translate', dx: -mud_rotate_x * (rx - 1), dy: -mud_rotate_y * (ry - 1)},
                            {type: 'scale', rx: rx, ry: ry},
                            {type: 'translate', dx: dx, dy: dy},
                            {type: 'rotate', angle: angle_target, cx: mud_rotate_x, cy: mud_rotate_y}
                        ]);
                    } else {
                        $('#mud' + i).hide();
                    }
                }
                mud_timeline = mud_timeline + mud_delay;
            }

            var tail_delay = 33;
            var swing_tail_timer = setInterval(swing_tail, tail_delay);
            var paw_delay = 50, paw_timeline = -1, paw_repeat_time = 10 * paw_delay, paw_frame_no = 0;
            var paw_keyframes = [
                {x: 0, y: 0, angle: 0, time: 0},
                {x: -42, y: -8, angle: -15, time: 5 * paw_delay},
                {x: -20, y: -6, angle: -12, time: 8 * paw_delay},
                {x: 0, y: 0, angle: 0, time: 10 * paw_delay}
            ];
            var paw_timer = setInterval(paw_move, paw_delay);

            var mud_delay = 66, mud_timeline = -1, mud_repeat_time = 10 * mud_delay;
            var mud_keyframes = [
                [
                    {x: 0, y: 0, width: 12, height: 20, angle: 0, time: 0},
                    {x: -89, y: 22, width: 12, height: 16, angle: -360, time: 10 * mud_delay}
                ],
                [
                    {x: 0, y: 0, width: 7, height: 7, angle: 0, time: 5 * mud_delay},
                    {x: -81, y: 47, width: 27, height: 27, angle: -360, time: 10 * mud_delay}
                ],
                [
                    {x: 0, y: 0, width: 16, height: 16, angle: 0, time: 3 * mud_delay},
                    {x: -78, y: 63, width: 22, height: 22, angle: -360, time: 8 * mud_delay}
                ]
            ];
            var mud_timer = setInterval(mud_move, mud_delay);

            var play_audio_dog, play_audio_dig;

            if (Utils.isAndroid()) {
                var audio_dog = new Media('/android_asset/www/audio/dog.mp3', function () {
                }, Utils.onMediaError);
                var audio_dig = new Media('/android_asset/www/audio/dig.mp3', function () {
                }, Utils.onMediaError);

                var audio_wangwang = new Media('/android_asset/www/audio/wangwang.WAV', function () {
                    setTimeout(function () {
                        audio_dog.play();
                    }, 500);
                }, Utils.onMediaError);

                var audio_wadongsheng = new Media('/android_asset/www/audio/wadongsheng.WAV', function () {
                    setTimeout(function () {
                        audio_dig.play();
                    }, 500)
                }, Utils.onMediaError);

                play_audio_dog = function () {
                    audio_wangwang.play();
                };

                play_audio_dig = function() {
                    audio_wadongsheng.play();
                }
            } else { // not android
                $('#audio-wangwang').on('ended', function () {
                    setTimeout(function () {
                        $('#audio-dog').get(0).play();
                    }, 500)
                });

                $('#audio-wadongsheng').on('ended', function () {
                    setTimeout(function () {
                        $('#audio-dig').get(0).play();
                    }, 500)
                });
                play_audio_dog = function () {
                    $('#audio-wangwang').get(0).play();
                };
                play_audio_dig = function() {
                    $('#audio-wadongsheng').get(0).play();
                }
            }

            setTimeout(play_audio_dog, 1000);
            setTimeout(play_audio_dig, 4000);
        })
    })(jQuery);
}

if(Utils.isAndroid()) {
    Utils.require_phonegap_js();
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    onDeviceReady();
}
